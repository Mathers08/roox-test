import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useInput from '../../hooks/useInput';
import axios from "axios";

interface FormItemProps {
  readOnly: boolean;
  setReadOnly: (readonly: boolean) => void;
}

const FormInput: FC<FormItemProps> = ({readOnly, setReadOnly}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const {values, setValues, handleChange} = useInput();
  const templates = [
    {
      name: 'name',
      label: 'Name',
      value: values.name
    },
    {
      name: 'username',
      label: 'User name',
      value: values.username,
    },
    {
      name: 'email',
      label: 'E-mail',
      value: values.email,
    },
    {
      name: 'address',
      label: 'Street',
      value: values.address.street,
      'data-nested-name': 'street',
    },
    {
      name: 'address',
      label: 'City',
      value: values.address.city,
      'data-nested-name': 'city',
    },
    {
      name: 'address',
      label: 'Zip code',
      value: values.address.zipcode,
      'data-nested-name': 'zipcode',
    },
    {
      name: 'phone',
      label: 'Phone',
      value: values.phone,
    },
    {
      name: 'website',
      label: 'Website',
      value: values.website,
    },
  ];
  const hasEmptyFields = templates.map(template => template.value).some((val: any) => !val);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasEmptyFields) {
      if (!readOnly) {
        console.log({...values, comment});
        navigate('/');
      }
      setReadOnly(true);
    }
  }

  useEffect(() => {
    const fetchedItems = async () => {
      const {data: user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setValues(user);
    }
    fetchedItems();
  }, [id, setValues]);

  return (
    <form onSubmit={handleFormSubmit} className="form">
      {templates.map(template => (
        <div className='formItem' key={template.label}>
          <label>{template.label}</label>
          <input
            type="text"
            name={template.name}
            className={readOnly ? 'inputRead' : 'inputEdit' && !template.value ? 'inputError' : ''}
            readOnly={readOnly}
            value={template.value}
            onChange={handleChange}
            data-nested-name={'data-nested-name' in template && template['data-nested-name']}
          />
        </div>
      ))}
      <div className="formItem">
        <label>Comment</label>
        <textarea
          readOnly={readOnly}
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <button className={readOnly ? 'btn' : 'btn-success'}>??????????????????</button>
    </form>
  );
};

export default FormInput;