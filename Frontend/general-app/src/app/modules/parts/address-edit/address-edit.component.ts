import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressModel } from '../../../models/address-model';

@Component({
  selector: 'gap-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss']
})
export class AddressEditComponent implements OnInit {

  constructor() { }

  @Input()
  public index: number;

  @Input()
  public item: FormGroup;

  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();

  static getForm(formBuiler: FormBuilder, model: AddressModel): FormGroup {
    return formBuiler.group({
      street: [model.street, [Validators.minLength(5), Validators.maxLength(50)]],
      number: model.number,
      information: [model.information, [Validators.minLength(5), Validators.maxLength(50)]],
      city: [model.city, [Validators.minLength(5), Validators.maxLength(50)]],
      state: [model.state, [Validators.minLength(5), Validators.maxLength(50)]],
      country: [model.country, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      zipCode: [model.zipCode, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      removalDate: model.removalDate
    });
  }
  ngOnInit() {
  }

}
