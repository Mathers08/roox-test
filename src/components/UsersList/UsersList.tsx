import React, {FC, useEffect, useState} from 'react';
import './UsersList.scss';
import Sort from "./Sort";
import ListItem from "./ListItem";
import {IUser} from "../../types/user";
import axios from "axios";

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({data}) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='container'>
      <Sort users={users} setUsers={setUsers}/>
      <div className="list">
        <h3>Список пользователей</h3>
        <ListItem users={users} isLoading={isLoading}/>
      </div>
    </div>
  );
};

export default UsersList;