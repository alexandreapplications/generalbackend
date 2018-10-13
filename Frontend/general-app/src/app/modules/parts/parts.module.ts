import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { MultiControlComponent } from './multi-control/multi-control.component';
import { FormFieldValidatedComponent } from './form-field-validated/form-field-validated.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    AddressEditComponent, ContactEditComponent, DocumentEditComponent, MultiControlComponent, FormFieldValidatedComponent
  ],
  declarations: [AddressEditComponent, ContactEditComponent, DocumentEditComponent, MultiControlComponent, FormFieldValidatedComponent]
})
export class PartsModule { }
