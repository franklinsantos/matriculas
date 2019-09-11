import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TurnoService} from '../../../services/turno.service';

@Component({
  selector: 'app-turno-create',
  templateUrl: './turno-create.component.html',
  styleUrls: ['./turno-create.component.css']
})

export class TurnoCreateComponent implements OnInit {
  submitted = false;
  turnoForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private turnoService: TurnoService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.turnoForm = this.fb.group({
      nome: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.turnoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.turnoForm.valid) {
      return false;
    } else {
      this.turnoService.createTurno(this.turnoForm.value).subscribe(
        (res) => {
          console.log('Turno cadastrado com sucesso!');
          this.ngZone.run(() => this.router.navigateByUrl('/turnos/list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
