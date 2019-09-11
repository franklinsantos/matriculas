import { Curso } from '../../../model/Curso';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CursoService} from '../../../services/curso.service';
import {TipoService} from '../../../services/tipo.service';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})

export class CursoEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
    Tipos: any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private cursoService: CursoService,
    private tipoService: TipoService,
    private router: Router
  ) {
      this.readTipos();
  }

  ngOnInit() {
    this.updateCurso();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getCurso(id);
    this.editForm = this.fb.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  // Choose tipo with select dropdown
  updateTipo(e) {
    this.editForm.get('tipo').setValue(e, {
      onlySelf: true
    });
  }

  readTipos() {
    this.tipoService.getTipos().subscribe((data) => {
      this.Tipos = data;
    });
  }


  getCurso(id) {
    this.cursoService.getCurso(id).subscribe(data => {
      this.editForm.setValue({
        nome: data['nome'],
        tipo: null
      });
      if (!isNullOrUndefined(data.tipo)) {
          this.editForm.setValue({
            nome: data['nome'],
            tipo: data.tipo._id
          });
      }
    });
  }

  updateCurso() {
    this.editForm = this.fb.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Tem certeza que deseja alterar este registro?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.cursoService.updateCurso(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/cursos/list');
            console.log('Conteúdo atualizado com sucesso!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
