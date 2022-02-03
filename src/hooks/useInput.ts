import React, {useState} from "react";
import {IUser} from "../types/user";

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
  }

  return {
    values,
    setValues,
    handleChange
  }
};

export default useInput;