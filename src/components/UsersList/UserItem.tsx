import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../types/IUser';
import './UsersList.scss';

interface ListItemProps {
  user: IUser;
}

const UserItem: FC<ListItemProps> = ({ user }) => {
  return (
    <div className="listItem">
      <div className="userBlock">
        <div className="userInfo">
          <p>ФИО: </p>
          <span>{user.name}</span>
        </div>
        <div className="userInfo">
          <p>город: </p>
          <span>{user.address.city}</span>
        </div>
        <div className="userInfo">
          <p>компания: </p>
          <span>{user.company?.name}</span>
        </div>
      </div>
      <Link to={`/profile/${user.id}`}>Подробнее</Link>
    </div>
  )
}

export default UserItem;