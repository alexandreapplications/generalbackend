import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditComponent } from './contact-edit.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestHelper } from 'src/app/testing/test-helper';

describe('ContactEditComponent', () => {
  let component: ContactEditComponent;
  let fixture: ComponentFixture<ContactEditComponent>;
  const formBuilder = new FormBuilder();

  const mockModels = {
    fullModel: {
      contactType: 'EMAIL',
      deletedDate: null,
      description: 'description',
      information: 'information',
      isMain: true,
      value: '1234567890'
    },
    deletedModel: {
      contactType: 'EMAIL',
      deletedDate: null,
      description: 'description',
      information: 'information',
      isMain: true,
      value: '1234567890'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactEditComponent],
      imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    component.item = ContactEditComponent.getForm(formBuilder, mockModels.fullModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.index = 0;
    expect(component).toBeTruthy();
  });
  it('should by valid', () => {
    component.item = ContactEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(component.item.valid).toBeTruthy();
  });
  it('contact type should be valid', () => {
    const field = component.item.get('contactType');
    component.item = ContactEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testRequiredField(field, false)).toBeFalsy();
    expect(TestHelper.testRequiredField(field, true)).toBeTruthy();
    expect(TestHelper.testMaxLengthField(field, 30)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 31)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });
  it('contact type should to have min length', () => {
    const field = component.item.get('contactType');
    component.item = ContactEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testMaxLengthField(field, 30)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 31)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });
  it('description should be valid', () => {
    const field = component.item.get('description');
    component.item = ContactEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testMaxLengthField(field, 50)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 51)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });
  it('information should be valid', () => {
    const field = component.item.get('information');
    component.item = ContactEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testMaxLengthField(field, 50)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 51)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });
  it('value should be obligatory', () => {
    const field = component.item.get('value');
    component.item = ContactEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testRequiredField(field, false)).toBeFalsy();
    expect(TestHelper.testRequiredField(field, true)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });
});
