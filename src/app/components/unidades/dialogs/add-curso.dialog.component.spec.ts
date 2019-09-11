import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AddCursoDialogComponent} from './add-curso.dialog.component';

describe('AddCursoDialogComponent', () => {
  let component: UnidadeCreateComponent;
  let fixture: ComponentFixture<AddCursoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCursoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
