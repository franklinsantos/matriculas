import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})

export class TipoService extends ApiService {

  pathUri:string = 'tipos';

  // Create
  createTipo(data): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all tipos
  getTipos() {
    return this.http.get(`${this.baseUri}/${this.pathUri}`);
  }

  // Get tipo
  getTipo(id): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update tipo
  updateTipo(id, data): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete tipo
  deleteTipo(id): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
}