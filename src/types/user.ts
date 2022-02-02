export interface IAddress {
  street: string;
  city: string;
  zipcode: number;
}

export interface ICompany {
  name: string;
}

export interface IUser {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
  address: IAddress;
  company?: ICompany;
}