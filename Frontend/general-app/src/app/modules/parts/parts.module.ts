import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddressEditComponent, ContactEditComponent, DocumentEditComponent
  ],
  declarations: [AddressEditComponent, ContactEditComponent, DocumentEditComponent]
})
export class PartsModule { }
