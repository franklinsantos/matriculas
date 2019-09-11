import { Component, OnInit } from '@angular/core';
import {UnidadeService} from '../../../services/unidade.service';

@Component({
  selector: 'app-unidade-list',
  templateUrl: './unidade-list.component.html',
  styleUrls: ['./unidade-list.component.css']
})

export class UnidadeListComponent implements OnInit {

  Unidade: any = [];

  constructor(private unidadeService: UnidadeService) {
    this.readUnidade();
  }

  ngOnInit() {}

  readUnidade() {
    this.unidadeService.getUnidades().subscribe((data) => {
     this.Unidade = data;
    });
  }

  removeUnidade(unidade, index) {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
        this.unidadeService.deleteUnidade(unidade._id).subscribe((data) => {
          this.Unidade.splice(index, 1);
        }
      );
    }
  }

}
