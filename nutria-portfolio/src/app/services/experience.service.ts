import { Injectable, inject } from '@angular/core';
import { SupabaseService } from '../core/supabase.service';
import { Experience } from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private supabase = inject(SupabaseService);

  private get client() {
    return this.supabase.supabase;
  }

  async getAll() {
    const { data, error } = await this.client
      .from('experience')
      .select('*')
      .order('start_date', { ascending: false });

    if (error) throw error;
    return data as Experience[];
  }

  async getById(id: string): Promise<Experience | null> {
    const { data, error } = await this.client
      .from('experiences')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    return data as Experience | null;
  }

  async create(experience: Partial<Experience>): Promise<Experience> {
    const payload = {
      company: experience.company ?? '',
      role: experience.role ?? '',
      description: experience.description ?? '',
      start_date: experience.start_date ?? '',
      end_date: experience.end_date ?? '',
    };

    const { data, error } = await this.client
      .from('experience')
      .insert(payload)
      .select()
      .single();

    if (error) throw error;
    return data as Experience;
  }

  async update(id: string, experience: Partial<Experience>): Promise<Experience> {
    const { data, error } = await this.client
      .from('experience')
      .update(experience)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Experience;
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.client
      .from('experience')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
}
