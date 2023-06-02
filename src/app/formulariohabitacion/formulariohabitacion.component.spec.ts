import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariohabitacionComponent } from './formulariohabitacion.component';

describe('FormulariohabitacionComponent', () => {
  let component: FormulariohabitacionComponent;
  let fixture: ComponentFixture<FormulariohabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariohabitacionComponent]
    });
    fixture = TestBed.createComponent(FormulariohabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
