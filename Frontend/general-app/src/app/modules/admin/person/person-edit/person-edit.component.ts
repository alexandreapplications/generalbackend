import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PersonService } from '../person.service';
import { PersonModel } from '../../../../models/person-model';
import { AddressEditComponent } from '../../../parts/address-edit/address-edit.component';
import { ContactEditComponent } from '../../../parts/contact-edit/contact-edit.component';
import { DocumentEditComponent } from '../../../parts/document-edit/document-edit.component';
import { AddressModel } from 'src/app/models/address-model';
import { DocumentModel } from 'src/app/models/document-model';
import { ContactModel } from 'src/app/models/contact-model';

@Component({
  selector: 'gap-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  public _id: string;
  public _submitted = false;
  public _recordForm: FormGroup;
  public _record: PersonModel;

  constructor(
    private _route: ActivatedRoute,
    public _formBuilder: FormBuilder,
    public _personService: PersonService) {
  }

  public onSubmit() {
    this._submitted = true;
  }

  ngOnInit() {
    this._route.paramMap.subscribe(routeParams => {
      this._id = routeParams.get('id');
      this._record = this._personService.getSingle(this._id);
      this._recordForm = this._formBuilder.group({
        id: [this._record.id, Validators.required],
        identificationCode: [this._record.identificationCode, [Validators.required, Validators.maxLength(15)]],
        name: [this._record.name, [Validators.required, Validators.maxLength(80)]],
        alias: [this._record.alias, [Validators.minLength(10), Validators.maxLength(30)]],
        includeDate: [this._record.includeDate],
        addresses: this._formBuilder.array(
          this._record.addresses.map(x => AddressEditComponent.getForm(this._formBuilder, x))
        ),
        documents: this._formBuilder.array(
          this._record.documents.map(x => DocumentEditComponent.getForm(this._formBuilder, x))
        ),
        contacts: this._formBuilder.array(
          this._record.contacts.map(x => ContactEditComponent.getForm(this._formBuilder, x))
        )
      });
    });
  }

  public addNewAddress() {
    this.addresses.controls.push(AddressEditComponent.getForm(this._formBuilder, new AddressModel()));
  }
  public addNewContact() {
    this.contacts.controls.push(ContactEditComponent.getForm(this._formBuilder, new ContactModel()));
  }
  public addNewDocument() {
    this.documents.controls.push(DocumentEditComponent.getForm(this._formBuilder, new DocumentModel()));
  }

  get addresses(): FormArray {
    return this._recordForm.get('addresses') as FormArray;
  }
  get contacts(): FormArray {
    return this._recordForm.get('contacts') as FormArray;
  }
  get documents(): FormArray {
    return this._recordForm.get('documents') as FormArray;
  }
}
