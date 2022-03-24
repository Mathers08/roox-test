import React, {useState} from 'react';
import './UserProfile.scss';
import {Link} from 'react-router-dom';
import FormInput from "./FormInput";

const UserProfile = () => {
  const [readOnly, setReadOnly] = useState(true);
  const handleEditClick = () => setReadOnly(false);

  return (
    <>
      <div className="listHeader">
        <h3>Профиль пользователя</h3>
        <Link to='/'>(back to users)</Link>
        <button className="btn" onClick={handleEditClick}>Редактировать</button>
      </div>
      <FormInput readOnly={readOnly} setReadOnly={setReadOnly}/>
    </>
  );
}

export default UserProfile;
