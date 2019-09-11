import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})

export class AlunoService extends ApiService {

  pathUri:string = 'alunos';

  // Create
  createAluno(data): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all alunos
  getAlunos() {
    return this.http.get(`${this.baseUri}/${this.pathUri}`);
  }

  // Get aluno
  getAluno(id): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update aluno
  updateAluno(id, data): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete aluno
  deleteAluno(id): Observable<any> {
    let url = `${this.baseUri}/${this.pathUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
}