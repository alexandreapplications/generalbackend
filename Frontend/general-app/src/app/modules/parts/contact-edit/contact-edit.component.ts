import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ContactModel } from '../../../models/contact-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gap-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
  ) { }
  @Input()
  public index: number;

  @Input()
  public item: FormGroup;

  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();

  static getForm(formBuiler: FormBuilder, model: ContactModel): FormGroup {
    return formBuiler.group({
      contactType: [model.contactType, Validators.required],
      description: model.description,
      value: [model.value, Validators.required],
      information: model.information,
      isMain: model.isMain,
      deletedDate: model.deletedDate
    });
  }
  ngOnInit() {
  }

}
