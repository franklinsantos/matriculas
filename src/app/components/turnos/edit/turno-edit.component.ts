import { Turno } from '../../../model/Turno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TurnoService} from '../../../services/turno.service';


@Component({
  selector: 'app-turno-edit',
  templateUrl: './turno-edit.component.html',
  styleUrls: ['./turno-edit.component.css']
})

export class TurnoEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  turnoData: Turno[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private turnoService: TurnoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateTurno();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getTurno(id);
    this.editForm = this.fb.group({
      nome: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getTurno(id) {
    this.turnoService.getTurno(id).subscribe(data => {
      this.editForm.setValue({
        nome: data['nome'],
      });
    });
  }

  updateTurno() {
    this.editForm = this.fb.group({
      nome: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Tem certeza que deseja alterar este registro?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.turnoService.updateTurno(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/turnos/list');
            console.log('Conteúdo atualizado com sucesso!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
