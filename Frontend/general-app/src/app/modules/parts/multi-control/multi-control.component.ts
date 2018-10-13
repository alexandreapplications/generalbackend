import { Component, OnInit, Input, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'gap-multi-control',
  templateUrl: './multi-control.component.html',
  styleUrls: ['./multi-control.component.scss']
})
export class MultiControlComponent implements OnInit {

  constructor() { }

  @Input()
  public formArray: FormArray;
  @Input()
  public index: number;
  @Input()
  public title: string;
  @Input()
  public mustHave = false;
  @Output()
  public needsEmptyRecord: EventEmitter<boolean> = new EventEmitter<boolean>();

  public get count(): number {
    return this.formArray.controls.length;
  }

  public doMoveUp() {
    const itemToMove = this.formArray.controls.splice(this.index, 1);
    this.formArray.controls.splice(this.index - 1, 0, itemToMove[0]);
  }

  public doMoveDown() {
    const itemToMove = this.formArray.controls.splice(this.index, 1);
    this.formArray.controls.splice(this.index + 1, 0, itemToMove[0]);
  }
  public doRemove() {
    this.formArray.controls.splice(this.index, 1);
    if (this.mustHave && this.count === 0) {
      this.needsEmptyRecord.emit(true);
    }
  }

  public doAddRecord() {
    this.needsEmptyRecord.emit(true);
  }

  ngOnInit() {
  }

}
