import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UnidadeService} from '../../../services/unidade.service';
declare let $: any;


@Component({
    selector: 'app-unidade-edit',
    templateUrl: './unidade-edit.component.html',
    styleUrls: ['./unidade-edit.component.css']
})

export class UnidadeEditComponent implements OnInit {
    submitted = false;
    editForm: FormGroup;
    Unidade: any = {cursoUnidadeTurno: []};

    constructor(public fb: FormBuilder,
                private actRoute: ActivatedRoute,
                private unidadeService: UnidadeService,
                private router: Router) {
    }

    ngOnInit() {
        this.updateUnidade();
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.getUnidade(id);
        this.editForm = this.fb.group({
            nome: ['', [Validators.required]],
            cursoUnidadeTurno: ['']
        });
    }

    // Getter to access form control
    get myForm() {
        return this.editForm.controls;
    }

    getUnidade(id) {
        this.unidadeService.getUnidade(id).subscribe(data => {
            this.editForm.setValue({
                nome: data['nome'],
                cursoUnidadeTurno: []
            });
            this.Unidade = data;
        });
    }

    updateUnidade() {
        this.editForm = this.fb.group({
            nome: ['', [Validators.required]],
            cursoUnidadeTurno: ['']
        });
    }

    onSubmit() {
        this.submitted = true;
        if (!this.editForm.valid) {
            return false;
        } else {
            if (window.confirm('Tem certeza que deseja alterar este registro?')) {
                this.editForm.get('cursoUnidadeTurno').setValue(this.Unidade.cursoUnidadeTurno);
                const id = this.actRoute.snapshot.paramMap.get('id');
                this.unidadeService.updateUnidade(id, this.editForm.value)
                    .subscribe(res => {
                        this.router.navigateByUrl('/unidades/list');
                        console.log('Conteúdo atualizado com sucesso!');
                    }, (error) => {
                        console.log(error);
                    });
            }
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
