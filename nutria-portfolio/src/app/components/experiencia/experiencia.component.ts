import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

interface DisplayExperience {
  id: string;
  dates: string;
  company: string;
  role: string;
  description: string;
}

@Component({
  selector: 'app-experiencia',
  standalone: true,
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  private experienceService = inject(ExperienceService);

  experiences: DisplayExperience[] = [];
  loading = true;
  error = '';

  constructor() {
    this.loadExperiences();
  }
  

  private async loadExperiences() {
    try {
      const data = await this.experienceService.getAll();
      console.log('DATA SUPABASE:', data);
      this.experiences = data.map(exp => ({
        id: exp.id ?? '',
        dates: this.formatDates(exp.start_date, exp.end_date),
        company: exp.company,
        role: exp.role,
        description: exp.description,
      }));

     console.log('MAPPED:', this.experiences);
    } catch (err) {
      console.error(err);
      this.error = 'No se pudieron cargar las experiencias';
    } finally {
      this.loading = false;
    }
  }

 private formatDates(
  start: Date | string | null,
  end: Date | string | null
): string {

  if (!start && !end) return '';

  const startYear = start
    ? new Date(start).getFullYear().toString()
    : '';

  const endLabel = end
    ? new Date(end).getFullYear().toString()
    : 'Presente';

  return `${startYear} — ${endLabel}`;
} 
}
