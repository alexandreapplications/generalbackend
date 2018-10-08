export class ContactModel {
    /// <summary>
    /// Contact Type
    /// </summary>
    /// <remarks>Email, Telephone, Site</remarks>
    public contactType: string;
    /// <summary>
    /// Document description
    /// </summary>
    /// <remarks>Home, Facebook</remarks>
    public description: string;
    /// <summary>
    /// Contact Value
    /// </summary>
    public value: string;
    /// <summary>
    /// Complementary information
    /// </summary>
    public information: string;
    /// <summary>
    /// Is main contact
    /// </summary>
    public isMain: boolean;
    /// <summary>
    /// Removal date
    /// </summary>
    public deletedDate: Date;
}
