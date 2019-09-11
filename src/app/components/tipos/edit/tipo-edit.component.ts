import { Tipo } from '../../../model/Tipo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TipoService} from '../../../services/tipo.service';


@Component({
  selector: 'app-tipo-edit',
  templateUrl: './tipo-edit.component.html',
  styleUrls: ['./tipo-edit.component.css']
})

export class TipoEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  tipoData: Tipo[];
  TipoProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private tipoService: TipoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateTipo();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getTipo(id);
    this.editForm = this.fb.group({
      nome: ['', [Validators.required]]
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getTipo(id) {
    this.tipoService.getTipo(id).subscribe(data => {
      this.editForm.setValue({
        nome: data['nome']
      });
    });
  }

  updateTipo() {
    this.editForm = this.fb.group({
      nome: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Tem certeza que deseja alterar este registro?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.tipoService.updateTipo(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/tipos/list');
            console.log('Conteúdo atualizado com sucesso!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
