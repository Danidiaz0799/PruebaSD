import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil, finalize } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-list.html',
  styleUrl: './usuario-list.css'
})
export class UsuarioListComponent implements OnInit, OnDestroy {
  usuarios: Usuario[] = [];
  loading = false;
  error = '';
  searchTerm = '';

  private destroy$ = new Subject<void>();

  constructor(private readonly usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUsuarios(): void {
    this.setLoadingState(true);
    
    this.usuarioService.getAllUsuarios()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.setLoadingState(false))
      )
      .subscribe({
        next: (usuarios) => this.handleSuccessResponse(usuarios),
        error: (error) => this.handleErrorResponse('cargar los usuarios', error)
      });
  }

  searchUsuarios(): void {
    const term = this.searchTerm.trim();
    
    if (!term) {
      this.loadUsuarios();
      return;
    }

    this.setLoadingState(true);
    
    this.usuarioService.searchUsuarios(term)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.setLoadingState(false))
      )
      .subscribe({
        next: (usuarios) => this.handleSuccessResponse(usuarios),
        error: (error) => this.handleErrorResponse('buscar usuarios', error)
      });
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.loadUsuarios();
  }

  private handleSuccessResponse(usuarios: Usuario[]): void {
    this.usuarios = usuarios;
    this.error = '';
  }

  private handleErrorResponse(action: string, error: any): void {
    console.error(`Error al ${action}:`, error);
    this.error = `Error al ${action}. ${this.getErrorMessage(error)}`;
    this.usuarios = [];
  }

  private setLoadingState(loading: boolean): void {
    this.loading = loading;
    if (loading) {
      this.error = '';
    }
  }

  private getErrorMessage(error: any): string {
    if (error?.error?.message) {
      return error.error.message;
    }
    if (error?.message) {
      return error.message;
    }
    if (error?.status === 0) {
      return 'No se puede conectar con el servidor. Verifica que la API esté ejecutándose.';
    }
    if (error?.status >= 500) {
      return 'Error interno del servidor.';
    }
    if (error?.status === 404) {
      return 'Recurso no encontrado.';
    }
    return 'Por favor, inténtalo de nuevo más tarde.';
  }

  onSearchKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.searchUsuarios();
    }
  }

  trackByUsuarioId(index: number, usuario: Usuario): number {
    return usuario.usuID;
  }
}
