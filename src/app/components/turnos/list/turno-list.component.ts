import { Component, OnInit } from '@angular/core';
import {TurnoService} from "../../../services/turno.service";

@Component({
  selector: 'app-turno-list',
  templateUrl: './turno-list.component.html',
  styleUrls: ['./turno-list.component.css']
})

export class TurnoListComponent implements OnInit {
  
  Turno:any = [];

  constructor(private turnoService: TurnoService) {
    this.readTurno();
  }

  ngOnInit() {}

  readTurno(){
    this.turnoService.getTurnos().subscribe((data) => {
     this.Turno = data;
    })    
  }

  removeTurno(turno, index) {
    if(window.confirm('Tem certeza que deseja excluir este registro?')) {
        this.turnoService.deleteTurno(turno._id).subscribe((data) => {
          this.Turno.splice(index, 1);
        }
      )    
    }
  }

}