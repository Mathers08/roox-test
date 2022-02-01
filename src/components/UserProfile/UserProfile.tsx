import React from 'react';
import Sort from "../UsersList/Sort";

const UserProfile = () => {
  return (
    <div className='container'>
      <Sort users={[]} setUsers={null}/>
      <div className="list">
        <h3>Профиль пользователя</h3>
      </div>
    </div>
  );
};

export default UserProfile;