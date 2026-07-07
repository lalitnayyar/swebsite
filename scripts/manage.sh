#!/usr/bin/env bash
set -euo pipefail

APP_NAME="sts-website"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEFAULT_BRANCH="main"

compose() {
  local mode="$1"; shift

  case "$mode" in
    dev)
      docker compose -f "${ROOT_DIR}/docker-compose.yml" "$@"
      ;;
    prod)
      docker compose -f "${ROOT_DIR}/docker-compose.prod.yml" "$@"
      ;;
    *)
      echo "Unknown mode: ${mode} (expected dev|prod)" >&2
      exit 1
      ;;
  esac
}

ensure_docker() {
  if ! command -v docker >/dev/null 2>&1; then
    echo "Docker is required but not found in PATH." >&2
    exit 1
  fi

  if ! docker info >/dev/null 2>&1; then
    echo "Docker daemon is not reachable. Is Docker running?" >&2
    exit 1
  fi
}

print_header() {
  echo ""
  echo "${APP_NAME} management"
  echo "Root: ${ROOT_DIR}"
  echo ""
}

usage() {
  cat <<EOF
Usage:
  ./scripts/manage.sh [command] [--mode dev|prod]

Commands:
  menu        Interactive menu
  deploy      Build + start (prod defaults to -d)
  start       Start services
  stop        Stop services
  restart     Restart services
  down        Stop + remove containers
  status      Show running containers
  logs        Follow logs
  patch       Pull latest code + rebuild + restart
  set-remote  Configure git remote origin
  install-docker  Install Docker (Ubuntu/Debian) in one shot

Options:
  --mode      dev or prod (default: dev)
  --branch    Git branch to pull during patch (default: main)

Examples:
  ./scripts/manage.sh menu
  ./scripts/manage.sh deploy --mode prod
  ./scripts/manage.sh logs --mode prod
EOF
}

parse_mode() {
  local mode="dev"

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --mode)
        mode="$2"
        shift 2
        ;;
      --branch)
        shift 2
        ;;
      *)
        shift
        ;;
    esac
  done

  echo "$mode"
}

parse_branch() {
  local branch="$DEFAULT_BRANCH"

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --branch)
        branch="$2"
        shift 2
        ;;
      --mode)
        shift 2
        ;;
      *)
        shift
        ;;
    esac
  done

  echo "$branch"
}

cmd_deploy() {
  local mode="$1"
  ensure_docker
  if [[ "$mode" == "prod" ]]; then
    compose "$mode" up -d --build
  else
    compose "$mode" up --build
  fi
}

cmd_start() {
  local mode="$1"
  ensure_docker
  if [[ "$mode" == "prod" ]]; then
    compose "$mode" up -d
  else
    compose "$mode" up
  fi
}

cmd_stop() {
  local mode="$1"
  ensure_docker
  compose "$mode" stop
}

cmd_restart() {
  local mode="$1"
  ensure_docker
  compose "$mode" restart
}

cmd_down() {
  local mode="$1"
  ensure_docker
  compose "$mode" down
}

cmd_status() {
  local mode="$1"
  ensure_docker
  compose "$mode" ps
}

cmd_logs() {
  local mode="$1"
  ensure_docker
  compose "$mode" logs -f --tail=200
}

cmd_patch() {
  local mode="$1"
  local branch="$2"
  ensure_docker

  if ! command -v git >/dev/null 2>&1; then
    echo "git is required for patching but not found in PATH." >&2
    exit 1
  fi

  if ! git -C "$ROOT_DIR" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "This directory is not a git repository: ${ROOT_DIR}" >&2
    echo "Initialize git and set remote first, or run: ./scripts/manage.sh set-remote" >&2
    exit 1
  fi

  if ! git -C "$ROOT_DIR" remote get-url origin >/dev/null 2>&1; then
    echo "Remote 'origin' is not configured." >&2
    echo "Run: ./scripts/manage.sh set-remote" >&2
    exit 1
  fi

  if [[ -n "$(git -C "$ROOT_DIR" status --porcelain)" ]]; then
    echo "Working tree has uncommitted changes. Commit or stash before patch." >&2
    exit 1
  fi

  echo "Pulling latest changes..."
  git -C "$ROOT_DIR" pull --rebase origin "$branch"

  echo "Rebuilding and restarting..."
  if [[ "$mode" == "prod" ]]; then
    compose "$mode" up -d --build
  else
    compose "$mode" up --build
  fi

  echo "Patch applied."
}

cmd_set_remote() {
  if ! command -v git >/dev/null 2>&1; then
    echo "git is required but not found in PATH." >&2
    exit 1
  fi

  read -r -p "Enter Git remote URL (origin): " remote
  if [[ -z "$remote" ]]; then
    echo "Remote URL is required." >&2
    exit 1
  fi

  if ! git -C "$ROOT_DIR" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    git -C "$ROOT_DIR" init
  fi

  if git -C "$ROOT_DIR" remote get-url origin >/dev/null 2>&1; then
    git -C "$ROOT_DIR" remote set-url origin "$remote"
  else
    git -C "$ROOT_DIR" remote add origin "$remote"
  fi

  echo "Configured origin: $(git -C "$ROOT_DIR" remote get-url origin)"
}

cmd_install_docker() {
  if command -v docker >/dev/null 2>&1; then
    echo "Docker is already installed: $(docker --version)"
    return
  fi

  if ! command -v sudo >/dev/null 2>&1; then
    echo "sudo is required to install Docker but was not found." >&2
    exit 1
  fi

  echo "This will install Docker using apt (Ubuntu/Debian):"
  echo "  - docker.io"
  echo "  - docker-compose-plugin"
  echo "And enable/start the docker service."
  echo ""
  read -r -p "Proceed? (y/N): " confirm
  if [[ "${confirm}" != "y" && "${confirm}" != "Y" ]]; then
    echo "Cancelled."
    return
  fi

  sudo apt update
  sudo apt install -y docker.io docker-compose-plugin
  sudo systemctl enable --now docker

  echo ""
  echo "Installed: $(docker --version 2>/dev/null || true)"
  echo "Compose: $(docker compose version 2>/dev/null || true)"
  echo ""
  echo "Optional (recommended): allow running docker without sudo:"
  echo "  sudo usermod -aG docker \$USER"
  echo "  newgrp docker"
}

menu() {
  local mode="$1"
  local branch="$2"

  while true; do
    print_header
    echo "Mode: ${mode}"
    echo "Branch: ${branch}"
    echo ""
    echo "1) Deploy (build + start)"
    echo "2) Start"
    echo "3) Stop"
    echo "4) Restart"
    echo "5) Status"
    echo "6) Logs (follow)"
    echo "7) Down (stop + remove)"
    echo "8) Patch (git pull + rebuild + restart)"
    echo "9) Switch mode (dev/prod)"
    echo "10) Switch branch"
    echo "11) Set git remote (origin)"
    echo "12) Install Docker (Ubuntu/Debian)"
    echo "0) Exit"
    echo ""

    read -r -p "Select an option: " choice

    case "$choice" in
      1) cmd_deploy "$mode" ;;
      2) cmd_start "$mode" ;;
      3) cmd_stop "$mode" ;;
      4) cmd_restart "$mode" ;;
      5) cmd_status "$mode" ;;
      6) cmd_logs "$mode" ;;
      7) cmd_down "$mode" ;;
      8) cmd_patch "$mode" "$branch" ;;
      9)
        read -r -p "Enter mode (dev/prod): " new_mode
        if [[ "$new_mode" != "dev" && "$new_mode" != "prod" ]]; then
          echo "Invalid mode: ${new_mode}" >&2
          read -r -p "Press Enter to continue..." _
        else
          mode="$new_mode"
        fi
        ;;
      10)
        read -r -p "Enter branch: " new_branch
        if [[ -z "$new_branch" ]]; then
          echo "Invalid branch." >&2
          read -r -p "Press Enter to continue..." _
        else
          branch="$new_branch"
        fi
        ;;
      11)
        cmd_set_remote
        ;;
      12)
        cmd_install_docker
        ;;
      0) exit 0 ;;
      *)
        echo "Invalid choice." >&2
        read -r -p "Press Enter to continue..." _
        ;;
    esac

    echo ""
    read -r -p "Press Enter to continue..." _
  done
}

main() {
  if [[ $# -eq 0 ]]; then
    usage
    exit 1
  fi

  local command="$1"; shift
  local mode
  mode="$(parse_mode "$@")"
  local branch
  branch="$(parse_branch "$@")"

  case "$command" in
    -h|--help|help)
      usage
      ;;
    menu)
      menu "$mode" "$branch"
      ;;
    deploy)
      cmd_deploy "$mode"
      ;;
    start)
      cmd_start "$mode"
      ;;
    stop)
      cmd_stop "$mode"
      ;;
    restart)
      cmd_restart "$mode"
      ;;
    down)
      cmd_down "$mode"
      ;;
    status)
      cmd_status "$mode"
      ;;
    logs)
      cmd_logs "$mode"
      ;;
    patch)
      cmd_patch "$mode" "$branch"
      ;;
    set-remote)
      cmd_set_remote
      ;;
    install-docker)
      cmd_install_docker
      ;;
    *)
      echo "Unknown command: ${command}" >&2
      usage
      exit 1
      ;;
  esac
}

main "$@"
