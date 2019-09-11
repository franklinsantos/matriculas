import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CursoService} from '../../../services/curso.service';
import {TipoService} from '../../../services/tipo.service';

@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})

export class CursoCreateComponent implements OnInit {
  submitted = false;
  cursoForm: FormGroup;
  Tipos: any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private cursoService: CursoService,
    private tipoService: TipoService
  ) {
    this.mainForm();
    this.readTipos();
  }

  ngOnInit() { }

  mainForm() {
    this.cursoForm = this.fb.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    });
  }


  // Choose tipo with select dropdown
  updateTipo(e) {
    this.cursoForm.get('tipo').setValue(e, {
      onlySelf: true
    });
  }

  readTipos() {
    this.tipoService.getTipos().subscribe((data) => {
      this.Tipos = data;
    });
  }

  // Getter to access form control
  get myForm() {
    return this.cursoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.cursoForm.valid) {
      return false;
    } else {
      this.cursoService.createCurso(this.cursoForm.value).subscribe(
        (res) => {
          console.log('Curso cadastrado com sucesso!');
          this.ngZone.run(() => this.router.navigateByUrl('/cursos/list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
