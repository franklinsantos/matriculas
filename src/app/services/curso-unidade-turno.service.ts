import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})

export class CursoUnidadeTurnoService extends ApiService {

  pathUri = 'curso-unidade-turnos';

  // Create
  createCursoUnidadeTurno(data): Observable<any> {
    const url = `${this.baseUri}/${this.pathUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Get all cursoUnidadeTurnos
  getCursoUnidadeTurnos() {
    return this.http.get(`${this.baseUri}/${this.pathUri}`);
  }

  // Get cursoUnidadeTurno
  getCursoUnidadeTurno(id): Observable<any> {
    const url = `${this.baseUri}/${this.pathUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update cursoUnidadeTurno
  updateCursoUnidadeTurno(id, data): Observable<any> {
    const url = `${this.baseUri}/${this.pathUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  // Delete cursoUnidadeTurno
  deleteCursoUnidadeTurno(id): Observable<any> {
    const url = `${this.baseUri}/${this.pathUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }
}
