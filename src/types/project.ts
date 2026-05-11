export type ProjectCategory = 'frontend' | 'backend' | 'fullstack';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  gradient: string;
}
