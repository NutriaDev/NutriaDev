import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  error = '';
  loading = false;

  ngOnInit() {
    if (this.auth.getSession()) {
      this.router.navigateByUrl('/admin');
    }
  }

  async onSubmit() {
    this.error = '';
    this.loading = true;
    const { error } = await this.auth.signIn(this.email, this.password);
    this.loading = false;
    if (error) {
      this.error = error.message;
      return;
    }
    this.router.navigateByUrl('/admin');
  }
}
