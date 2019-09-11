import { Component, OnInit } from '@angular/core';
import {AlunoService} from '../../../services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})

export class AlunoListComponent implements OnInit {

  Aluno: any = [];

  constructor(private alunoService: AlunoService) {
    this.readAluno();
  }

  ngOnInit() {}

  readAluno() {
    this.alunoService.getAlunos().subscribe((data) => {
     this.Aluno = data;
    });
  }

  removeAluno(aluno, index) {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
        this.alunoService.deleteAluno(aluno._id).subscribe((data) => {
          this.Aluno.splice(index, 1);
        }
      );
    }
  }

}
