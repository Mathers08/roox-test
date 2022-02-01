interface IAddress {
  city: string;
}
interface ICompany {
  name: string;
}

export interface IUser {
  id: number;
  name: string;
  city: string;
  address: IAddress;
  company: ICompany;
}