import {Router} from '@angular/router';
import {Component, OnInit, NgZone} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UnidadeService} from '../../../services/unidade.service';
declare let $: any;

@Component({
    selector: 'app-unidade-create',
    templateUrl: './unidade-create.component.html',
    styleUrls: ['./unidade-create.component.css']
})

export class UnidadeCreateComponent implements OnInit {
    submitted = false;
    unidadeForm: FormGroup;
    Unidade: any = {cursoUnidadeTurno: []};

    constructor(public fb: FormBuilder,
                private router: Router,
                private ngZone: NgZone,
                private unidadeService: UnidadeService) {
        this.mainForm();
    }

    ngOnInit() {
    }

    mainForm() {
        this.unidadeForm = this.fb.group({
            nome: ['', [Validators.required]],
            cursoUnidadeTurno: ['']
        });
    }

    // Getter to access form control
    get myForm() {
        return this.unidadeForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (!this.unidadeForm.valid) {
            return false;
        } else {
            this.unidadeForm.get('cursoUnidadeTurno').setValue(this.Unidade.cursoUnidadeTurno);
            this.unidadeService.createUnidade(this.unidadeForm.value).subscribe(
                (res) => {
                    console.log('Unidade cadastrado com sucesso!');
                    this.ngZone.run(() => this.router.navigateByUrl('/unidades/list'));
                }, (error) => {
                    console.log(error);
                });
        }
    }

    removeCurso(curso, index) {
        if (window.confirm('Tem certeza que deseja excluir este registro?')) {
            this.Unidade.cursoUnidadeTurno.splice(index, 1);
        }
    }

    onHideAddCursoDialog(response) {
        if (response) {
            this.Unidade.cursoUnidadeTurno.push(response);
        }

        $('#formModal').modal('hide');
    }

}
