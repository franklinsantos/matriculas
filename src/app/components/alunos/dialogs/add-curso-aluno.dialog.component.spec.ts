import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {UnidadeCreateComponent} from '../../unidades/create/unidade-create.component';

describe('AddCursoAlunoDialogComponent', () => {
  let component: UnidadeCreateComponent;
  let fixture: ComponentFixture<AddCursoAlunoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCursoAlunoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCursoAlunoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
