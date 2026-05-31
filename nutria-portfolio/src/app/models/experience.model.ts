export interface Experience {
  id?: string;
  company: string;
  role: string;
  description: string;
  start_date: string | Date | null;
  end_date: string | Date | null;
}
