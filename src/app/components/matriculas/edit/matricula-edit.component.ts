import { Matricula } from '../../../model/Matricula';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MatriculaService} from "../../../services/matricula.service";


@Component({
  selector: 'app-matricula-edit',
  templateUrl: './matricula-edit.component.html',
  styleUrls: ['./matricula-edit.component.css']
})

export class MatriculaEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  matriculaData: Matricula[];
  MatriculaProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private matriculaService: MatriculaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateMatricula();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getMatricula(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getMatricula(id) {
    this.matriculaService.getMatricula(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        designation: data['designation'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }

  updateMatricula() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Tem certeza que deseja excluir este registro?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.matriculaService.updateMatricula(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/matriculas-list');
            console.log('Conteúdo atualizado com sucesso!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}