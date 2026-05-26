import { Injectable, inject } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private supabase = inject(SupabaseService);
  private auth = inject(AuthService);

  async loadProfilePhoto(): Promise<string | null> {
    const user = this.auth.getSession()?.user;

    if (user) {
      const { data } = await this.supabase.supabase
        .from('profile')
        .select('photo')
        .eq('id', user.id)
        .maybeSingle();
      return data?.photo ?? null;
    }

    const { data } = await this.supabase.supabase
      .from('profile')
      .select('photo')
      .limit(1)
      .maybeSingle();
    return data?.photo ?? null;
  }

  async uploadProfilePhoto(file: File): Promise<string> {
    const user = this.auth.getSession()?.user;
    if (!user) throw new Error('No autenticado');

    const ext = file.name.split('.').pop() || 'jpg';
    const filePath = `profiles/${user.id}/photo-${Date.now()}.${ext}`;

    const { error: uploadError } = await this.supabase.supabase.storage
      .from('portfolio')
      .upload(filePath, file, { upsert: true });

    if (uploadError) throw new Error(uploadError.message);

    const { data: publicUrlData } = this.supabase.supabase.storage
      .from('portfolio')
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  }

  async saveProfilePhoto(photoUrl: string): Promise<void> {
    const user = this.auth.getSession()?.user;
    if (!user) throw new Error('No autenticado');

    const { error } = await this.supabase.supabase
      .from('profile')
      .upsert({ id: user.id, photo: photoUrl }, { onConflict: 'id' });

    if (error) throw new Error(error.message);
  }
}
