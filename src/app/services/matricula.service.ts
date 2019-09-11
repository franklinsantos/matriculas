import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})

export class MatriculaService extends ApiService {

  pathUri:string = 'matriculas';

  // Create
  createMatricula(data): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all matriculas
  getMatriculas() {
    return this.http.get(`${this.baseUri}/${this.pathUri}`);
  }

  // Get matricula
  getMatricula(id): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update matricula
  updateMatricula(id, data): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete matricula
  deleteMatricula(id): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
}