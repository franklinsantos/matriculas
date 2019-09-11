import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TipoService} from '../../../services/tipo.service';

@Component({
  selector: 'app-tipo-create',
  templateUrl: './tipo-create.component.html',
  styleUrls: ['./tipo-create.component.css']
})

export class TipoCreateComponent implements OnInit {
  submitted = false;
  tipoForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private tipoService: TipoService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.tipoForm = this.fb.group({
      nome: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.tipoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.tipoForm.valid) {
      return false;
    } else {
      this.tipoService.createTipo(this.tipoForm.value).subscribe(
        (res) => {
          console.log('Tipo cadastrado com sucesso!');
          this.ngZone.run(() => this.router.navigateByUrl('/tipos/list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
