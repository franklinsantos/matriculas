import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AlunoService} from '../../../services/aluno.service';
import {CursoUnidadeTurnoService} from '../../../services/curso-unidade-turno.service';
declare let $: any;

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})

export class AlunoCreateComponent implements OnInit {
  submitted = false;
  alunoForm: FormGroup;
  Aluno: any = {matriculas: []};

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private alunoService: AlunoService,
    private cursoUnidadeTurnoService: CursoUnidadeTurnoService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.alunoForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      cpf: ['', [Validators.required]],
      matriculas: ['']
    });
  }

  // Getter to access form control
  get myForm() {
    return this.alunoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.alunoForm.valid) {
      return false;
    } else {
      this.alunoForm.get('matriculas').setValue(this.Aluno.matriculas);
      this.alunoService.createAluno(this.alunoForm.value).subscribe(
        (res) => {
          console.log('Aluno adicionado com sucesso!');
          this.ngZone.run(() => this.router.navigateByUrl('/alunos/list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

  removeMatricula(matricula, index) {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
      this.Aluno.matriculas.splice(index, 1);
    }
  }


  onHideAddCursoDialog(response) {
      this.cursoUnidadeTurnoService.getCursoUnidadeTurno(response.cursoUnidadeTurno._id).subscribe(data => {
          if (data.qtd_vagas > 0) {
              this.Aluno.matriculas.push(response);

              $('#formModal').modal('hide');
          } else {
              alert('Não há mais vagas para o curso selecionado!');
          }
      });
  }
}
