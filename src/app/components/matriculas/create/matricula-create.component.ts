import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MatriculaService} from "../../../services/matricula.service";

@Component({
  selector: 'app-matricula-create',
  templateUrl: './matricula-create.component.html',
  styleUrls: ['./matricula-create.component.css']
})

export class MatriculaCreateComponent implements OnInit {
  submitted = false;
  matriculaForm: FormGroup;
  MatriculaProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private matriculaService: MatriculaService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.matriculaForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.matriculaForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.matriculaForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.matriculaForm.valid) {
      return false;
    } else {
      this.matriculaService.createMatricula(this.matriculaForm.value).subscribe(
        (res) => {
          console.log('Matricula cadastrado com sucesso!')
          this.ngZone.run(() => this.router.navigateByUrl('/matriculas-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
