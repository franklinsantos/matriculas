import { Component, OnInit } from '@angular/core';
import {TipoService} from '../../../services/tipo.service';

@Component({
  selector: 'app-tipo-list',
  templateUrl: './tipo-list.component.html',
  styleUrls: ['./tipo-list.component.css']
})

export class TipoListComponent implements OnInit {

  Tipo: any = [];

  constructor(private tipoService: TipoService) {
    this.readTipo();
  }

  ngOnInit() {}

  readTipo() {
    this.tipoService.getTipos().subscribe((data) => {
     this.Tipo = data;
    });
  }

  removeTipo(tipo, index) {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
        this.tipoService.deleteTipo(tipo._id).subscribe((data) => {
          this.Tipo.splice(index, 1);
        }
      );
    }
  }

}
