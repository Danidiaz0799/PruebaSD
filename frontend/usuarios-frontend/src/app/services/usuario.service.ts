import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:7000/api/Usuarios';

  constructor(private http: HttpClient) {}

  /**
   * Obtener todos los usuarios
   */
  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  /**
   * Buscar usuarios por término de búsqueda
   */
  searchUsuarios(searchTerm: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/search?searchTerm=${encodeURIComponent(searchTerm)}`);
  }

  /**
   * Obtener usuario por ID
   */
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
}