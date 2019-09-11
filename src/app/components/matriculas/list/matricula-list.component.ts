import { Component, OnInit } from '@angular/core';
import {MatriculaService} from "../../../services/matricula.service";

@Component({
  selector: 'app-matricula-list',
  templateUrl: './matricula-list.component.html',
  styleUrls: ['./matricula-list.component.css']
})

export class MatriculaListComponent implements OnInit {
  
  Matricula:any = [];

  constructor(private matriculaService: MatriculaService) {
    this.readMatricula();
  }

  ngOnInit() {}

  readMatricula(){
    this.matriculaService.getMatriculas().subscribe((data) => {
     this.Matricula = data;
    })    
  }

  removeMatricula(matricula, index) {
    if(window.confirm('Tem certeza que deseja excluir este registro?')) {
        this.matriculaService.deleteMatricula(matricula._id).subscribe((data) => {
          this.Matricula.splice(index, 1);
        }
      )    
    }
  }

}