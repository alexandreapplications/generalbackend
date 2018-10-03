import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gap-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  public id: string;
  constructor(
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
  }

}
