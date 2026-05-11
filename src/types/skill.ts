export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tool' | 'design' | 'automation';

export interface Skill {
  name: string;
  icon: string; // Icon name from react-icons
  level: number;
  color: string;
  category: SkillCategory;
}
