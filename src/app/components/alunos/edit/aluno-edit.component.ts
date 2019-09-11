import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AlunoService} from '../../../services/aluno.service';
import {CursoUnidadeTurnoService} from '../../../services/curso-unidade-turno.service';
declare let $: any;


@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.css']
})

export class AlunoEditComponent implements OnInit {
  submitted = false;
  alunoForm: FormGroup;
  Aluno: any = {matriculas: []};

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private alunoService: AlunoService,
    private cursoUnidadeTurnoService: CursoUnidadeTurnoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateAluno();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getAluno(id);
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

  getAluno(id) {
    this.alunoService.getAluno(id).subscribe(data => {
      this.alunoForm.setValue({
        nome: data['nome'],
        email: data['email'],
        cpf: data['cpf'],
        matriculas: []
      });

      this.Aluno = data;
    });
  }

  updateAluno() {
    this.alunoForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      cpf: ['', [Validators.required]],
      matriculas: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.alunoForm.valid) {
      return false;
    } else {
      this.alunoForm.get('matriculas').setValue(this.Aluno.matriculas);
      if (window.confirm('Tem certeza que deseja alterar este registro?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.alunoService.updateAluno(id, this.alunoForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/alunos/list');
            console.log('Aluno atualizado com sucesso!');
          }, (error) => {
            console.log(error);
          });
      }
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
