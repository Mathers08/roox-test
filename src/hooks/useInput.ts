import React, {useState} from "react";
import {IUser} from "../types/IUser";

const initialUser = {
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    city: '',
    zipcode: '',
  },
  phone: '',
  website: ''
};

const useInput = () => {
  const [values, setValues] = useState<IUser>(initialUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });

    const nestedName = e.target.getAttribute('data-nested-name');
    const newValues: { [k: string]: any } | null = {...values};
    nestedName ? newValues[name][nestedName] = value : newValues[name] = value;
    setValues(newValues as IUser);
  }

  return {
    values,
    setValues,
    handleChange
  }
};

export default useInput;