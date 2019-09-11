import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../../services/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})

export class CursoListComponent implements OnInit {

  Curso: any = [];

  constructor(private cursoService: CursoService) {
    this.readCurso();
  }

  ngOnInit() {}

  readCurso() {
    this.cursoService.getCursos().subscribe((data) => {
     this.Curso = data;
    });
  }

  removeCurso(curso, index) {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
        this.cursoService.deleteCurso(curso._id).subscribe((data) => {
          this.Curso.splice(index, 1);
        }
      );
    }
  }

}
