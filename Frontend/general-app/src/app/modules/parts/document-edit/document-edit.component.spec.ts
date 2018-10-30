import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEditComponent } from './document-edit.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { DocumentModel } from 'src/app/models/document-model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestHelper } from 'src/app/testing/test-helper';

describe('DocumentEditComponent', () => {
  let component: DocumentEditComponent;
  let fixture: ComponentFixture<DocumentEditComponent>;
  const formBuilder = new FormBuilder();

  const mockModels = {
    fullModel: {
      documentType: 'Teste',
      emissionDate: null,
      emitter: 'Teste',
      expirationDate: null,
      number: '12345'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentEditComponent],
      imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentEditComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.item = DocumentEditComponent.getForm(formBuilder, mockModels.fullModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should by valid', () => {
    component.item = DocumentEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(component.item.valid).toBeTruthy();
  });

  it('document type should be valid', () => {
    const field = component.item.get('documentType');
    component.item = DocumentEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testRequiredField(field, false)).toBeFalsy();
    expect(TestHelper.testRequiredField(field, true)).toBeTruthy();
    expect(TestHelper.testMaxLengthField(field, 30)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 31)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });

  it('emmiter should be valid', () => {
    const field = component.item.get('emitter');
    component.item = DocumentEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testMaxLengthField(field, 30)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 31)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });

  it('number should be valid', () => {
    const field = component.item.get('number');
    component.item = DocumentEditComponent.getForm(formBuilder, mockModels.fullModel);
    expect(TestHelper.testRequiredField(field, false)).toBeFalsy();
    expect(TestHelper.testRequiredField(field, true)).toBeTruthy();
    expect(TestHelper.testMaxLengthField(field, 30)).toBeFalsy();
    expect(TestHelper.testMaxLengthField(field, 31)).toBeTruthy();
    expect(TestHelper.testMinLengthField(field, 5)).toBeFalsy();
    expect(TestHelper.testMinLengthField(field, 4)).toBeTruthy();
  });

  it('expiration date should be after emission date', () => {
    const emissionDate = component.item.get('emissionDate');
    const expirationDate = component.item.get('expirationDate');
    emissionDate.setValue(new Date(2017, 1, 1, 0, 0, 0, 0));
    expirationDate.setValue(new Date(2017, 1, 2, 0, 0, 0, 0));
    expect((emissionDate.value as Date).getTime()).toBeLessThan((expirationDate.value as Date).getTime());
  });

});
