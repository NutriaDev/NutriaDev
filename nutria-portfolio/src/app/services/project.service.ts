import { Injectable, inject } from '@angular/core';
import { SupabaseService } from '../core/supabase.service';
import { AuthService } from '../core/auth.service';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private supabase = inject(SupabaseService);
  private auth = inject(AuthService);

  private get client() {
    return this.supabase.supabase;
  }

 async getAll() {
  const { data, error } = await this.supabase.client
  .from('projects')
    .select('*')
    .order('featured', { ascending: false })
    .order('order_index', { ascending: true });

  if (error) throw error;

  return data;
}

  async getById(id: string): Promise<Project | null> {
    const { data, error } = await this.client
      .from('projects')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    return data ? this.mapRow(data) : null;
  }

  async create(project: Partial<Project>): Promise<Project> {
    const payload = {
      title: project.title ?? '',
      description: project.description ?? '',
      image: project.image ?? null,
      github: project.github ?? '',
      demo: project.demo ?? '',
      stack: project.stack ?? [],
      featured: project.featured ?? false,
      order_index: project.order_index ?? 0,
      category: project.category ?? '',
      status: project.status ?? 'produccion',
      year: project.year ?? '',
    };

    const { data, error } = await this.client
      .from('projects')
      .insert(payload)
      .select()
      .single();

    if (error) throw error;
    return this.mapRow(data);
  }

  async update(id: string, project: Partial<Project>): Promise<Project> {
    const { data, error } = await this.client
      .from('projects')
      .update(project)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return this.mapRow(data);
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.client
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }

  async swapOrder(id1: string, order1: number, id2: string, order2: number): Promise<void> {
    const { error: e1 } = await this.client
      .from('projects')
      .update({ order_index: order2 })
      .eq('id', id1);

    if (e1) throw e1;

    const { error: e2 } = await this.client
      .from('projects')
      .update({ order_index: order1 })
      .eq('id', id2);

    if (e2) throw e2;
  }

  async getMaxOrderIndex(): Promise<number> {
    const { data, error } = await this.client
      .from('projects')
      .select('order_index')
      .order('order_index', { ascending: false })
      .limit(1);

    if (error) throw error;
    return (data?.[0]?.order_index ?? -1) + 1;
  }

  async uploadImage(file: File): Promise<string> {
    const user = this.auth.getSession()?.user;
    if (!user) throw new Error('No autenticado');

    const ext = file.name.split('.').pop() || 'png';
    const filePath = `projects/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadError } = await this.client.storage
      .from('portfolio')
      .upload(filePath, file, { upsert: true });

    if (uploadError) throw new Error(uploadError.message);

    const { data: publicUrlData } = this.client.storage
      .from('portfolio')
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  }

  async deleteImage(imageUrl: string): Promise<void> {
    const path = this.extractPathFromUrl(imageUrl);
    if (!path) return;

    await this.client.storage
      .from('portfolio')
      .remove([path]);
  }

  private extractPathFromUrl(url: string): string | null {
    const match = url.match(/\/portfolio\/(.+)/);
    return match?.[1] ?? null;
  }

  private mapRow(row: Record<string, unknown>): Project {
    return {
      id: row['id'] as string,
      title: row['title'] as string,
      description: row['description'] as string,
      image: (row['image'] as string) ?? null,
      github: row['github'] as string,
      demo: row['demo'] as string,
      stack: (row['stack'] as string[]) ?? [],
      featured: row['featured'] as boolean,
      order_index: (row['order_index'] as number) ?? 0,
      category: (row['category'] as string) ?? '',
      status: (row['status'] as Project['status']) ?? 'produccion',
      year: (row['year'] as string) ?? '',
      created_at: row['created_at'] as string,
    };
  }
}
