import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {IUser} from '../../types/user';
import './UserProfile.scss';
import FormItem from "./FormItem";

interface UserProfileProps {
  users: IUser[];
}

const UserProfile: FC<UserProfileProps> = ({users}) => {
  const [readOnly, setReadOnly] = useState<boolean>(true);

  const handleEditClick = () => setReadOnly(!readOnly);

  return (
    <>
      <div className="listHeader">
        <h3>Профиль пользователя</h3>
        <button className="btn" onClick={handleEditClick}>Редактировать</button>
      </div>
      <FormItem readOnly={readOnly} setReadOnly={setReadOnly}/>
    </>
  )
}

export default UserProfile;
