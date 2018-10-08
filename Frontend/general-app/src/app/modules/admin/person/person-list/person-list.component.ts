import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { PersonModel } from '../../../../models/person-model';

@Component({
  selector: 'gap-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  public displayedColumns = ['identificationCode', 'name', 'alias', 'includeDate'];
  public _EntityList: PersonModel[];
  constructor(personService: PersonService) {
    this._EntityList = personService.getList();
  }

  ngOnInit() {
  }

}
