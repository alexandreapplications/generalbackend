export class ContactModel {
    /// <summary>
    /// Contact Type
    /// </summary>
    /// <remarks>Email, Telephone, Site</remarks>
    public ContactType: string;
    /// <summary>
    /// Document description
    /// </summary>
    /// <remarks>Home, Facebook</remarks>
    public Description: string;
    /// <summary>
    /// Contact Value
    /// </summary>
    public Value: string;
    /// <summary>
    /// Complementary information
    /// </summary>
    public Information: string;
    /// <summary>
    /// Is main contact
    /// </summary>
    public IsMain: boolean;
    /// <summary>
    /// Removal date
    /// </summary>
    public DeletedDate: Date;
}
