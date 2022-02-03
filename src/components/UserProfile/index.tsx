import React, {useState} from 'react';
import './UserProfile.scss';
import FormInput from "./FormInput";

const UserProfile = () => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const handleEditClick = () => setReadOnly(!readOnly);

  return (
    <>
      <div className="listHeader">
        <h3>Профиль пользователя</h3>
        <button className="btn" onClick={handleEditClick}>Редактировать</button>
      </div>
      <FormInput readOnly={readOnly} setReadOnly={setReadOnly}/>
    </>
  )
}

export default UserProfile;
