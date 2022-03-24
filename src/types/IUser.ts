export interface IAddress {
  street: string;
  city: string;
  zipcode: number | string;
}

export interface ICompany {
  name: string;
}

export interface IUser {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: number | string;
  website: string;
  address: IAddress;
  company?: ICompany;
  comment?: string;
}