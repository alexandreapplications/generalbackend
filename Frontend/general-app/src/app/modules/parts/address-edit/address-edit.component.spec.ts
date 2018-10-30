import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressEditComponent } from './address-edit.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressModel } from 'src/app/models/address-model';
import { TestHelper } from 'src/app/testing/test-helper';

describe('AddressEditComponent', () => {
  let component: AddressEditComponent;
  let fixture: ComponentFixture<AddressEditComponent>;
  const formBuilder = new FormBuilder();
  const mockModels = {
    fullModel: {
      city: '12345',
      country: '12345',
      information: '12345',
      number: '',
      removalDate: null,
      state: '12345',
      street: '12345',
      zipCode: '123'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressEditComponent ],
      imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressEditComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.item = AddressEditComponent.getForm(formBuilder, mockModels.fullModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should by valid', () => {
    component.item = AddressEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(component.item.valid).toBeTruthy();
  });

  it('street should be valid', () => {
    const field = component.item.get('street');
    component.item = AddressEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testMaxLengthField(field, 50)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 51)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });

  it('information should be valid', () => {
    const field = component.item.get('information');
    component.item = AddressEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testMaxLengthField(field, 50)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 51)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });

  it('city should be valid', () => {
    const field = component.item.get('city');
    component.item = AddressEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testMaxLengthField(field, 50)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 51)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });

  it('state should be valid', () => {
    const field = component.item.get('state');
    component.item = AddressEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testMaxLengthField(field, 50)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 51)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });

  it('country should be valid', () => {
    const field = component.item.get('country');
    component.item = AddressEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testRequiredField(field, false)).toBeFalsy();
    expect(TestHelper.testRequiredField(field, true)).toBeTruthy();
    expect(TestHelper.testMaxLengthField(field, 50)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 51)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 3)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 2)).toBeTruthy();
  });

  it('zip code should be valid', () => {
    const field = component.item.get('zipCode');
    component.item = AddressEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testRequiredField(field, false)).toBeFalsy();
    expect(TestHelper.testRequiredField(field, true)).toBeTruthy();
    expect(TestHelper.testMaxLengthField(field, 15)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 16)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 3)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 2)).toBeTruthy();
  });

});
