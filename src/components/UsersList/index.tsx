import React, {FC} from 'react';
import {IUser} from '../../types/user';
import Loader from '../Loader';
import UserItem from './UserItem';
import './UsersList.scss';

interface UsersListProps {
  users: IUser[];
  isLoading: boolean;
}

const UsersList: FC<UsersListProps> = ({users, isLoading}) => {
  return (
    <>
      <h3>Список пользователей</h3>
      {isLoading ? <Loader/> : users.map((user) => (
        <UserItem user={user}/>
      ))}
      <div className="countInfo">Найдено {users.length} пользователей</div>
    </>
  )
}

export default UsersList;
