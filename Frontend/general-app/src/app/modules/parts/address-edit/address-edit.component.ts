import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
      street: model.street,
      number: model.number,
      information: model.information,
      city: model.city,
      state: model.state,
      country: model.country,
      zipCode: model.zipCode,
      removalDate: model.removalDate
    });
  }
  ngOnInit() {
  }

}
