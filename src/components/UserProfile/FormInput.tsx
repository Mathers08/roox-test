import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useInput from '../../hooks/useInput';
import {IUser} from "../../types/user";

interface FormItemProps {
  readOnly: boolean;
  setReadOnly: (readonly: boolean) => void;
  getUserById: (id: number) => IUser;
}

const FormInput: FC<FormItemProps> = ({readOnly, setReadOnly, getUserById}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {values, setValues, handleChange} = useInput();
  const [comment, setComment] = useState<string>('');
  const templates = [
    {
      name: 'name',
      label: 'Name',
      value: values?.name,
    },
    {
      name: 'username',
      label: 'User name',
      value: values?.username,
    },
    {
      name: 'email',
      label: 'E-mail',
      value: values?.email,
    },
    {
      name: 'street',
      label: 'Street',
      value: values?.address.street,
    },
    {
      name: 'city',
      label: 'City',
      value: values?.address.city,
    },
    {
      name: 'zipcode',
      label: 'Zip code',
      value: values?.address.zipcode,
    },
    {
      name: 'phone',
      label: 'Phone',
      value: values?.phone,
    },
    {
      name: 'website',
      label: 'Website',
      value: values?.website,
    },
  ];
  const hasEmptyFields = templates.map(template => template.value).some((val: any) => !val);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasEmptyFields) {
      if (!readOnly) {
        console.log({...values, comment});
        //navigate('/');
      }
      setReadOnly(true);
    }
  }
  useEffect(() => {
    setValues(getUserById(Number(id)));
  }, [id]);

  return (
    <form onSubmit={handleFormSubmit} className="form">
      {templates.map(template => (
        <div className='formItem' key={template.label}>
          <label htmlFor="">{template.label}</label>
          <input
            type="text"
            name={template.name}
            className={readOnly ? 'inputRead' : 'inputEdit' && !template.value ? 'inputError' : ''}
            readOnly={readOnly}
            value={template.value}
            onChange={handleChange}
          />
        </div>
      ))}
      <div className="formItem">
        <label htmlFor="">Comment</label>
        <textarea
          readOnly={readOnly}
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <button className={readOnly ? 'btn' : 'btn-success'}>Отправить</button>
    </form>
  );
};

export default FormInput;