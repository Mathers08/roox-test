import React, {useEffect, useState} from 'react';
import Sort from "../UsersList/Sort";
import './UserProfile.scss';
import FormInput from "./FormInput";
import axios from "axios";
import {useParams} from "react-router-dom";
import {IUser} from "../../types/user";

const UserProfile = () => {
  const [user, setUser] = useState<IUser>({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      city: '',
      zipcode: 0,
    },
    phone: 0,
    website: '',
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => e.target.value;
  const {id} = useParams();

  const templates = {
    template1: {
      items: ['name', 'username', 'email', 'address.street', 'address.city', 'address.zipcode', 'phone', 'website']
    },
    template2: {
      items: ['Name', 'User name', 'E-mail', 'Street', 'City', 'Zip code', 'Phone', 'Website']
    },
  };

  useEffect(() => {
    const fetchedItems = async () => {
      await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(({data}) => {
          setUser(data);
          console.log(data)
        });
    }
    fetchedItems();
  }, [id]);

  return (
    <div className='container'>
      <Sort users={[]} setUsers={null}/>
      <div className="list">
        <div className='listHeader'>
          <h3>Профиль пользователя</h3>
          <button className="btn">Редактировать</button>
        </div>
        <form className='form'>
          <FormInput
            type='text'
            label="Name"
            value={user.name}
            onChange={handleFormChange}/>
          <FormInput
            type='text'
            label="User name"
            value={user.username}
            onChange={handleFormChange}/>
          <FormInput
            type='text'
            label="E-mail"
            value={user.email}
            onChange={handleFormChange}/>
          <FormInput
            type='text'
            label="Street"
            value={user.address.street}
            onChange={handleFormChange}/>
          <FormInput
            type='text'
            label="City"
            value={user.address.city}
            onChange={handleFormChange}/>
          <FormInput
            type='text'
            label="Zip code"
            value={user.address.zipcode}
            onChange={handleFormChange}/>
          <FormInput
            type='text'
            label="Phone"
            value={user.phone}
            onChange={handleFormChange}/>
          <FormInput
            type='text'
            label="Website"
            value={user.website}
            onChange={handleFormChange}/>
          <FormInput
            type='textarea'
            label="Comment"
            value=''
            onChange={handleFormChange}/>
          <button className='btn'>Отправить</button>
        </form>
        {Object.keys(templates).map(template => (
          <div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;