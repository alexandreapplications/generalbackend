import { ContactModel } from './contact-model';
import { AddressModel } from './address-model';
import { DocumentModel } from './document-model';

export class PersonModel {
    /// <summary>
    /// Record Identification
    /// </summary>
    public id: string;
    /// <summary>
    /// External code
    /// </summary>
    public identificationCode: string;
    /// <summary>
    /// Name
    /// </summary>
    public name: string;
    /// <summary>
    /// Name
    /// </summary>
    public alias: string;
    /// <summary>
    /// Include date
    /// </summary>
    public includeDate: Date;
    /// <summary>
    /// Addresses of the user
    /// </summary>
    public addresses: Array<AddressModel>;
    /// <summary>
    /// Contacts with the user
    /// </summary>
    public contacts: Array<ContactModel>;
    /// <summary>
    /// Documents of the user
    /// </summary>
    public documents: Array<DocumentModel>;
}
