export class FormData {

  constructor(
    public firstName: string,
    public lastName: string,
    public address1: string,
    public phoneNumber: string,
    public address2?: string
  ) { }

  public setPhoneNumber(n) {
    this.phoneNumber = n;
  }
}
