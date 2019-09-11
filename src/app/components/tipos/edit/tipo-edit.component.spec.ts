import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEditComponent } from './tipo-edit.component';

describe('TipoEditComponent', () => {
  let component: TipoEditComponent;
  let fixture: ComponentFixture<TipoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
