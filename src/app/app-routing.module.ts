import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoCreateComponent } from './components/alunos/create/aluno-create.component';
import { AlunoListComponent } from './components/alunos/list/aluno-list.component';
import { AlunoEditComponent } from './components/alunos/edit/aluno-edit.component';
import {CursoCreateComponent} from './components/cursos/create/curso-create.component';
import {CursoEditComponent} from './components/cursos/edit/curso-edit.component';
import {CursoListComponent} from './components/cursos/list/curso-list.component';
import {UnidadeCreateComponent} from './components/unidades/create/unidade-create.component';
import {UnidadeEditComponent} from './components/unidades/edit/unidade-edit.component';
import {UnidadeListComponent} from './components/unidades/list/unidade-list.component';
import {MatriculaListComponent} from "./components/matriculas/list/matricula-list.component";
import {MatriculaEditComponent} from "./components/matriculas/edit/matricula-edit.component";
import {MatriculaCreateComponent} from "./components/matriculas/create/matricula-create.component";
import {TurnoListComponent} from "./components/turnos/list/turno-list.component";
import {TurnoEditComponent} from "./components/turnos/edit/turno-edit.component";
import {TurnoCreateComponent} from "./components/turnos/create/turno-create.component";
import {TipoListComponent} from "./components/tipos/list/tipo-list.component";
import {TipoEditComponent} from "./components/tipos/edit/tipo-edit.component";
import {TipoCreateComponent} from "./components/tipos/create/tipo-create.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'alunos/list' },
  {
    'path': 'alunos',
    'children': [
      {
        'path': 'create',
        'component': AlunoCreateComponent
      },
      {

        'path': 'edit/:id',
        'component': AlunoEditComponent
      },
      {

        'path': 'list',
        'component': AlunoListComponent
      }
    ]
  },
  {
    'path': 'cursos',
    'children': [
      {
        'path': 'create',
        'component': CursoCreateComponent
      },
      {

        'path': 'edit/:id',
        'component': CursoEditComponent
      },
      {

        'path': 'list',
        'component': CursoListComponent
      }
    ]
  },
  {
    'path': 'unidades',
    'children': [
      {
        'path': 'create',
        'component': UnidadeCreateComponent
      },
      {

        'path': 'edit/:id',
        'component': UnidadeEditComponent
      },
      {

        'path': 'list',
        'component': UnidadeListComponent
      }
    ]
  },
  {
    'path': 'tipos',
    'children': [
      {
        'path': 'create',
        'component': TipoCreateComponent
      },
      {

        'path': 'edit/:id',
        'component': TipoEditComponent
      },
      {

        'path': 'list',
        'component': TipoListComponent
      }
    ]
  },
  {
    'path': 'turnos',
    'children': [
      {
        'path': 'create',
        'component': TurnoCreateComponent
      },
      {

        'path': 'edit/:id',
        'component': TurnoEditComponent
      },
      {

        'path': 'list',
        'component': TurnoListComponent
      }
    ]
  },
  {
    'path': 'matriculas',
    'children': [
      {
        'path': 'create',
        'component': MatriculaCreateComponent
      },
      {

        'path': 'edit/:id',
        'component': MatriculaEditComponent
      },
      {

        'path': 'list',
        'component': MatriculaListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
