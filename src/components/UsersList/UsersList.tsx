import React from 'react';
import './UsersList.scss';
import Sort from "./Sort";
import ListItem from "./ListItem";

const UsersList = () => {
  return (
    <div className='container'>
      <Sort/>
      <div className="list">
        <h3>Список пользователей</h3>
        <ListItem/>
      </div>
    </div>
  );
};

export default UsersList;