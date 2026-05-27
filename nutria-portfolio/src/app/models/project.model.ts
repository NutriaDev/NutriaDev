export interface Project {
  id?: string;
  title: string;
  description: string;
  image: string | null;
  github: string;
  demo: string;
  stack: string[];
  featured: boolean;
  order_index: number;
  category: string;
  status: string;
  year: string;
  created_at?: string;
}

export type ProjectStatus = Project['status'];

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  desarrollo: 'En desarrollo',
  produccion: 'Producción',
  privado: 'Privado',
};
