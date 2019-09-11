import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {TipoService} from '../../../services/tipo.service';
import {TurnoService} from '../../../services/turno.service';
import {CursoService} from '../../../services/curso.service';
import {UnidadeService} from '../../../services/unidade.service';

@Component({
    selector: 'app-add-curso-aluno-dialog',
    templateUrl: './add-curso-aluno.dialog.component.html',
    styleUrls: ['./add-curso-aluno.dialog.component.css']
})

export class AddCursoAlunoDialogComponent implements OnInit {
    cursoSubmitted = false;
    cursoForm: FormGroup;
    Unidades: any = [];
    matricula: any  = {unidade: null, curso: null, tipo: null, turno: null, cursoUnidadeTurno: null};

    @Output() onHideParent = new EventEmitter();

    constructor(public fb: FormBuilder,
                private unidadeService: UnidadeService) {

    }

    ngOnInit() {
        this.readUnidades();

        this.cursoForm = this.fb.group({
            unidade: ['', [Validators.required]],
            tipo: ['', [Validators.required]],
            turno: ['', [Validators.required]],
            curso: ['', [Validators.required]]
        });
    }

    // Getter to access form control
    get myCursoForm() {
        return this.cursoForm.controls;
    }

    readUnidades() {
        this.unidadeService.getUnidades().subscribe((data) => {
            this.Unidades = data;
            this.Unidades.forEach((unidade) => {
                unidade.turnos = [];
                unidade.cursoUnidadeTurno.forEach((cursoUT) => unidade.turnos.push(cursoUT.turno));
                unidade.turnos.forEach((turno) => {
                    turno.tipos = [];
                    unidade.cursoUnidadeTurno
                        .filter((cursoUT) => cursoUT.turno._id === turno._id)
                        .forEach((turnoUT) => {
                                turno.tipos.push(turnoUT.curso.tipo);

                            }
                        );
                    turno.tipos.forEach((tipo) => {
                        tipo.cursos = [];
                        unidade.cursoUnidadeTurno
                            .filter((cursoUT) => (cursoUT.turno._id === turno._id && cursoUT.curso.tipo._id === tipo._id))
                            .forEach((tipoUT) => {
                                delete tipoUT.curso.tipo;
                                tipo.cursos.push(tipoUT.curso);
                            });
                    });
                });
            });
        });
    }

    onSubmitCurso() {
        this.cursoSubmitted = true;
        if (!this.cursoForm.valid) {
            return false;
        } else {
            this.matricula.cursoUnidadeTurno = this.matricula.unidade.cursoUnidadeTurno.filter((cursoUT) => cursoUT.curso._id === this.matricula.curso._id)[0];
            delete this.matricula.tipo.cursos;
            this.matricula.cursoUnidadeTurno.curso.tipo =  this.matricula.tipo;
            this.onHideParent.emit(this.matricula);
            this.matricula =  {unidade: null, curso: null, tipo: null, turno: null, cursoUnidadeTurno: null};
        }
    }

}
