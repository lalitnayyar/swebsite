.PHONY: dev build start lint format test e2e docker-up docker-prod

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

format:
	npm run format

test:
	npm run test

e2e:
	npm run test:e2e

docker-up:
	docker compose up --build

docker-prod:
	docker compose -f docker-compose.prod.yml up --build
