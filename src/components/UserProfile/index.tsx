import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {IUser} from '../../types/user';
import FormInput from './FormInput';
import './UserProfile.scss';

const initialUser = {
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
}

const UserProfile = () => {
  const [user, setUser] = useState<IUser>(initialUser);
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const onReadOnlyClick = () => setReadOnly(false);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => e.target.value;
  const onSendRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!readOnly) {
      console.log(user);
    }
  }
  const {id} = useParams();

  const templates = [
    {
      label: 'Name',
      value: user.name,
    },
    {
      label: 'User name',
      value: user.username,
    },
    {
      label: 'E-mail',
      value: user.email,
    },
    {
      label: 'Street',
      value: user.address.street,
    },
    {
      label: 'City',
      value: user.address.city,
    },
    {
      label: 'Zip code',
      value: user.address.zipcode,
    },
    {
      label: 'Phone',
      value: user.phone,
    },
    {
      label: 'Website',
      value: user.website,
    },
  ];

  useEffect(() => {
    const fetchedItems = async () => {
      const {data: users} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(users);
    }
    fetchedItems();
  }, [id]);

  return (
    <div className="list">
      <div className="listHeader">
        <h3>Профиль пользователя</h3>
        <button className="btn" onClick={onReadOnlyClick}>Редактировать</button>
      </div>
      <form onSubmit={onSendRequest} className="form">
        {templates.map(template => (
          <FormInput
            type="text"
            readonly={readOnly}
            label={template.label}
            value={template.value}
            onChange={handleFormChange}
          />
        ))}
        <FormInput
          type="textarea"
          label='Comment'
          value=''
          onChange={handleFormChange}
        />
        <button className={readOnly ? 'btn' : 'btn-success'}>Отправить</button>
      </form>
    </div>
  )
}

export default UserProfile;
