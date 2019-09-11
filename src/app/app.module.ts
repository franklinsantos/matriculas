import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlunoCreateComponent } from './components/alunos/create/aluno-create.component';
import { AlunoListComponent } from './components/alunos/list/aluno-list.component';
import { AlunoEditComponent } from './components/alunos/edit/aluno-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';

import {CursoListComponent} from './components/cursos/list/curso-list.component';
import {CursoCreateComponent} from './components/cursos/create/curso-create.component';
import {CursoEditComponent} from './components/cursos/edit/curso-edit.component';
import {UnidadeCreateComponent} from './components/unidades/create/unidade-create.component';
import {UnidadeListComponent} from './components/unidades/list/unidade-list.component';
import {UnidadeEditComponent} from './components/unidades/edit/unidade-edit.component';
import {TipoCreateComponent} from './components/tipos/create/tipo-create.component';
import {TurnoCreateComponent} from './components/turnos/create/turno-create.component';
import {TurnoListComponent} from './components/turnos/list/turno-list.component';
import {TipoEditComponent} from './components/tipos/edit/tipo-edit.component';
import {TipoListComponent} from './components/tipos/list/tipo-list.component';
import {TurnoEditComponent} from './components/turnos/edit/turno-edit.component';
import {MatriculaCreateComponent} from './components/matriculas/create/matricula-create.component';
import {MatriculaListComponent} from './components/matriculas/list/matricula-list.component';
import {MatriculaEditComponent} from './components/matriculas/edit/matricula-edit.component';
import {AddCursoDialogComponent} from './components/unidades/dialogs/add-curso.dialog.component';
import {AddCursoAlunoDialogComponent} from "./components/alunos/dialogs/add-curso-aluno.dialog.component";
import {FilterPipe} from "./helpers/filter-pipe";
import {GroupByPipe} from "./helpers/groupBy-pipe";

@NgModule({
  declarations: [
    AppComponent,
    AlunoCreateComponent,
    AlunoListComponent,
    AlunoEditComponent,
    CursoCreateComponent,
    CursoListComponent,
    CursoEditComponent,
    UnidadeCreateComponent,
    UnidadeListComponent,
    UnidadeEditComponent,
    TipoCreateComponent,
    TipoListComponent,
    TipoEditComponent,
    TurnoCreateComponent,
    TurnoListComponent,
    TurnoEditComponent,
    MatriculaCreateComponent,
    MatriculaListComponent,
    MatriculaEditComponent,
    AddCursoDialogComponent,
    AddCursoAlunoDialogComponent,
    FilterPipe,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
