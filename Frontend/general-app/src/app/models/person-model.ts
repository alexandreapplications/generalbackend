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
    public IdentificationCode: string;
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
    public Addresses: Array<AddressModel>;
    /// <summary>
    /// Contacts with the user
    /// </summary>
    public Contacts: Array<ContactModel>;
    /// <summary>
    /// Documents of the user
    /// </summary>
    public Documents: Array<DocumentModel>;
}
