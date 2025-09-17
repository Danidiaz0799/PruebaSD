import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private readonly apiUrl = 'https://localhost:7000/api/Usuarios';

    constructor(private readonly http: HttpClient) {}

    getAllUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiUrl)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    searchUsuarios(searchTerm: string): Observable<Usuario[]> {
        if (!searchTerm?.trim()) {
            return this.getAllUsuarios();
        }
        const params = new HttpParams().set('searchTerm', searchTerm.trim());
        return this.http.get<Usuario[]>(`${this.apiUrl}/search`, { params })
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    getUsuarioById(id: number): Observable<Usuario> {
        if (!id || id <= 0) {
            return throwError(() => new Error('ID de usuario inválido'));
        }

        return this.http.get<Usuario>(`${this.apiUrl}/${id}`)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    private handleError = (error: HttpErrorResponse): Observable<never> => {
        let errorMessage = 'Ha ocurrido un error inesperado';

        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error de conexión: ${error.error.message}`;
        } else {
            switch (error.status) {
                case 0:
                    errorMessage = 'No se puede conectar con el servidor. Verifica que la API esté ejecutándose en https://localhost:7000';
                break;
                case 400:
                    errorMessage = 'Solicitud inválida';
                break;
                case 404:
                    errorMessage = 'Recurso no encontrado';
                break;
                case 500:
                    errorMessage = 'Error interno del servidor';
                break;
                default:
                    errorMessage = `Error del servidor: ${error.status} - ${error.message}`;
            }
        }
        console.error('Error en UsuarioService:', error);
        return throwError(() => new Error(errorMessage));
    };
}