import { Injectable, inject } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { BehaviorSubject } from 'rxjs';
import type { Session } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private supabase = inject(SupabaseService);
  private sessionSubject = new BehaviorSubject<Session | null>(null);
  session$ = this.sessionSubject.asObservable();

  constructor() {
    this.supabase.supabase.auth.getSession().then(({ data: { session } }) => {
      this.sessionSubject.next(session);
    });
    this.supabase.supabase.auth.onAuthStateChange((_event, session) => {
      this.sessionSubject.next(session);
    });
  }


  getSession() {
    return this.sessionSubject.getValue();
  }

  async signIn(email: string, password: string) {
    return this.supabase.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    return this.supabase.supabase.auth.signOut();
  }
}
