import { Component, inject, AfterViewInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { PROJECT_STATUS_LABELS } from '../../models/project.model';

interface DisplayProject {
  num: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  badge: string;
  image: string | null;
  github: string;
  demo: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.component.html',
  styleUrl:    './proyectos.component.css',
})
export class ProyectosComponent implements AfterViewInit {
  private projectService = inject(ProjectService);

  projects: DisplayProject[] = [];
  loading = true;
  error   = '';

  showFadeLeft:  boolean[] = [];
  showFadeRight: boolean[] = [];

  private isDragging   = false;
  private startX       = 0;
  private scrollLeft   = 0;
  private touchStartX  = 0;
  private touchScrollL = 0;
  private activeSlider: HTMLElement | null = null;

  constructor() { this.loadProjects(); }

  private async loadProjects() {
    try {
      const data = await this.projectService.getAll();
      this.projects = data.map((p, i) => ({
        num:      `${(i + 1).toString().padStart(2, '0')} — ${p.category || 'Proyecto'}`,
        category:  p.category    || 'General',
        name:      p.title       || '',
        desc:      p.description || '',
        tags:      p.stack       || [],
        badge:     PROJECT_STATUS_LABELS[p.status as keyof typeof PROJECT_STATUS_LABELS] || 'Proyecto',
        image:     p.image       || null,
        github:    p.github      || '',
        demo:      p.demo        || '',
      }));
      this.showFadeLeft  = new Array(this.projects.length).fill(false);
      this.showFadeRight = new Array(this.projects.length).fill(false);
    } catch (err) {
      console.error(err);
      this.error = 'No se pudieron cargar los proyectos';
    } finally {
      this.loading = false;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.stack-slider')
        .forEach((el, i) => this.updateFades(el, i));
    }, 300);
  }

  onScroll(slider: HTMLElement, i: number) { this.updateFades(slider, i); }

  private updateFades(slider: HTMLElement, i: number) {
    const { scrollLeft, scrollWidth, clientWidth } = slider;
    this.showFadeLeft[i]  = scrollLeft > 4;
    this.showFadeRight[i] = scrollLeft < scrollWidth - clientWidth - 4;
  }

  onMouseDown(e: MouseEvent, slider: HTMLElement, _i: number) {
    this.isDragging   = true;
    this.activeSlider = slider;
    this.startX       = e.pageX - slider.offsetLeft;
    this.scrollLeft   = slider.scrollLeft;
    slider.classList.add('is-dragging');
  }

  onMouseMove(e: MouseEvent, slider: HTMLElement) {
    if (!this.isDragging || this.activeSlider !== slider) return;
    e.preventDefault();
    const walk = (e.pageX - slider.offsetLeft - this.startX) * 1.2;
    slider.scrollLeft = this.scrollLeft - walk;
  }

  onMouseUp() {
    this.activeSlider?.classList.remove('is-dragging');
    this.isDragging   = false;
    this.activeSlider = null;
  }

  onTouchStart(e: TouchEvent, slider: HTMLElement) {
    this.touchStartX  = e.touches[0].clientX;
    this.touchScrollL = slider.scrollLeft;
    this.activeSlider = slider;
  }

  onTouchMove(e: TouchEvent, slider: HTMLElement) {
    if (this.activeSlider !== slider) return;
    slider.scrollLeft = this.touchScrollL + (this.touchStartX - e.touches[0].clientX);
  }
}