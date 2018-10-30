import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentModel } from '../../../models/document-model';

@Component({
  selector: 'gap-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.scss']
})
export class DocumentEditComponent implements OnInit {

  constructor() { }

  @Input()
  public index: number;

  @Input()
  public item: FormGroup;

  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();

  static getForm(formBuiler: FormBuilder, model: DocumentModel): FormGroup {
    return formBuiler.group({
      documentType: [model.documentType, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      number: [model.number, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      emitter: [model.emitter, [Validators.minLength(5), Validators.maxLength(30)]],
      emissionDate: model.emissionDate,
      expirationDate: model.expirationDate
    });
  }
  ngOnInit() {
  }

}
