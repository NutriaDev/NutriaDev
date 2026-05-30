import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { Project, PROJECT_STATUS_LABELS } from '../../../models/project.model';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'})
export class ProjectFormComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);

  loading = true;
  saving = false;
  error = '';

  projectId = signal<string | null>(null);
  isEdit = computed(() => !!this.projectId());

  formData: Partial<Project> = {
    title: '',
    description: '',
    github: '',
    demo: '',
    stack: [],
    featured: false,
    order_index: 0,
    category: '',
    status: 'produccion',
    year: '',
    image: null,
  };

  imagePreview: string | null = null;
  selectedFile: File | null = null;
  uploadingImage = false;
  uploadImageError = '';
  private originalImageUrl: string | null = null;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectId.set(id);
      this.loadProject(id);
    } else {
      this.loading = false;
      this.initNewOrder();
    }
  }

  private async initNewOrder() {
    try {
      this.formData.order_index = await this.projectService.getMaxOrderIndex();
    } catch {
      this.formData.order_index = 0;
    }
  }

  private async loadProject(id: string) {
    try {
      const project = await this.projectService.getById(id);
      if (project) {
        this.formData = { ...project };
        this.originalImageUrl = project.image;
        if (project.image) {
          this.imagePreview = project.image;
        }
      } else {
        this.error = 'Proyecto no encontrado';
      }
    } catch (err: unknown) {
      this.error = err instanceof Error ? err.message : 'Error al cargar proyecto';
    } finally {
      this.loading = false;
    }
  }

  addTag(input: HTMLInputElement) {
    const value = input.value.trim();
    if (value && !this.formData.stack?.includes(value)) {
      this.formData.stack = [...(this.formData.stack ?? []), value];
    }
    input.value = '';
    input.focus();
  }

  onTagKeydown(event: KeyboardEvent, input: HTMLInputElement) {
  if (event.key === 'Enter' || event.key === ',') {
    event.preventDefault();   // evita submit del form y que escriba la coma
    this.addTag(input);
  }
}

  removeTag(index: number) {
    this.formData.stack = this.formData.stack?.filter((_, i) => i !== index) ?? [];
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      this.uploadImageError = 'La imagen no debe superar 5MB';
      return;
    }

    this.selectedFile = file;
    this.uploadImageError = '';

    const reader = new FileReader();
    reader.onload = e => {
      this.imagePreview = (e.target?.result as string) ?? null;
    };
    reader.readAsDataURL(file);

    this.uploadImage();
  }

  private async uploadImage() {
    if (!this.selectedFile) return;
    this.uploadingImage = true;
    this.uploadImageError = '';

    try {
      const url = await this.projectService.uploadImage(this.selectedFile);
      this.formData.image = url;
      this.selectedFile = null;
    } catch (err: unknown) {
      this.uploadImageError = err instanceof Error ? err.message : 'Error al subir imagen';
    } finally {
      this.uploadingImage = false;
    }
  }

  removeImage() {
    this.imagePreview = null;
    this.selectedFile = null;
    if (this.originalImageUrl && this.formData.image === this.originalImageUrl) {
      this.projectService.deleteImage(this.originalImageUrl).catch(() => {});
    }
    this.formData.image = null;
    this.originalImageUrl = null;
  }

  async save() {
    if (!this.formData.title?.trim()) {
      this.error = 'El título es obligatorio';
      return;
    }

    this.saving = true;
    this.error = '';

    try {
      const payload: Partial<Project> = {
        title: this.formData.title.trim(),
        description: this.formData.description?.trim() ?? '',
        image: this.formData.image,
        github: this.formData.github?.trim() ?? '',
        demo: this.formData.demo?.trim() ?? '',
        stack: this.formData.stack ?? [],
        featured: this.formData.featured ?? false,
        order_index: this.formData.order_index ?? 0,
        category: this.formData.category?.trim() ?? '',
        status: this.formData.status ?? 'produccion',
        year: this.formData.year?.trim() ?? '',
      };

      if (this.isEdit() && this.projectId()) {
        await this.projectService.update(this.projectId()!, payload);
      } else {
        await this.projectService.create(payload);
      }

      this.router.navigateByUrl('/admin/proyectos');
    } catch (err: unknown) {
      this.error = err instanceof Error ? err.message : 'Error al guardar proyecto';
    } finally {
      this.saving = false;
    }
  }
}
