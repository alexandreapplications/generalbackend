import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldValidatedComponent } from './form-field-validated.component';

describe('FormFieldValidatedComponent', () => {
  let component: FormFieldValidatedComponent;
  let fixture: ComponentFixture<FormFieldValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldValidatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
