import { Injectable } from '@angular/core';
import { PersonModel } from '../../../models/person-model';
import { AddressModel } from '../../../models/address-model';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  public getList(): PersonModel[] {
    return [
      { id: '10', name: 'José', alias: 'Sei', identificationCode: '100', includeDate: null,
      addresses: [], contacts: [], documents: [] },
      { id: '20', name: 'Maria', alias: 'Sei', identificationCode: '200', includeDate: null, addresses: [], contacts: [], documents: [] }
    ];
  }

  public getSingle(id: string): PersonModel {
    const personModel: PersonModel = {
      id: id,
      name: 'José',
      alias: 'Sei',
      identificationCode: '100',
      includeDate: null,
      addresses: [
        { street: '1st street', number: '1', information: 'Behind', city: 'CITY', state: 'ST',
        country: 'Any Country', zipCode: '12345', removalDate: null }
      ],
      contacts: [{
          contactType: 'Telephone',
          description: 'Personal',
          value: '+55 11 2222 3333',
          information: null,
          isMain: true,
          deletedDate: null
        },
      {
          contactType: 'Email',
          description: 'Personal',
          value: 'test@email.com',
          information: null,
          isMain: true,
          deletedDate: null
        }
      ],
      documents: []
    };
    return personModel;
  }
}
