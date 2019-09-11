import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {TipoService} from '../../../services/tipo.service';
import {TurnoService} from '../../../services/turno.service';
import {CursoService} from '../../../services/curso.service';

@Component({
    selector: 'app-add-curso-dialog',
    templateUrl: './add-curso.dialog.component.html',
    styleUrls: ['./add-curso.dialog.component.css']
})

export class AddCursoDialogComponent implements OnInit {
    cursoSubmitted = false;
    cursoForm: FormGroup;
    Tipos: any = [];
    Turnos: any = [];
    Cursos: any = [];
    cursoUnidadeTurno: any  = {curso: null, tipo: null, turno: null};

    @Output() onHideParent = new EventEmitter();

    constructor(public fb: FormBuilder,
                private tipoService: TipoService,
                private turnoService: TurnoService,
                private cursoService: CursoService) {

    }

    ngOnInit() {
        this.readTipos();
        this.readTurnos();
        this.readCursos();

        this.cursoForm = this.fb.group({
            tipo: ['', [Validators.required]],
            turno: ['', [Validators.required]],
            curso: ['', [Validators.required]],
            capacidade: ['', [Validators.required]]
        });
    }

    // Getter to access form control
    get myCursoForm() {
        return this.cursoForm.controls;
    }

    readTipos() {
        this.tipoService.getTipos().subscribe((data) => {
            this.Tipos = data;
        });
    }

    readTurnos() {
        this.turnoService.getTurnos().subscribe((data) => {
            this.Turnos = data;
        });
    }

    readCursos() {
        this.cursoService.getCursos().subscribe((data) => {
            this.Cursos = data;
        });
    }

    onSubmitCurso() {
        this.cursoSubmitted = true;
        if (!this.cursoForm.valid) {
            return false;
        } else {
            this.onHideParent.emit(this.cursoUnidadeTurno);
            this.cursoUnidadeTurno =  {curso: null, tipo: null, turno: null};
        }
    }

}
