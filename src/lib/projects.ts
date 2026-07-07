import projects from '@/content/projects.json';

export type Project = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  technologyStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
};

export function getAllProjects(): Project[] {
  return projects as Project[];
}
