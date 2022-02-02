import React, {FC} from 'react';
import {Link} from "react-router-dom";
import './UsersList.scss';
import {IUser} from '../../types/user';
import Loader from "../Loader";

interface ListItemProps {
  users: IUser[];
  isLoading: boolean;
}

const ListItem: FC<ListItemProps> = ({users, isLoading}) => {
  return (
    <>
      {isLoading ? <Loader/> : users.map((user) => (
        <div key={user.id} className="listItem">
          <div className='userBlock'>
            <div className='userInfo'>
              <p>ФИО: </p>
              <span>{user.name}</span>
            </div>
            <div className='userInfo'>
              <p>город: </p>
              <span>{user.address.city}</span>
            </div>
            <div className='userInfo'>
              <p>компания: </p>
              <span>{user.company?.name}</span>
            </div>
          </div>
          <Link to={`/profile/${user.id}`}>Подробнее</Link>
        </div>
      ))}
      <div className='countInfo'>Найдено {users.length} пользователей</div>
    </>
  );
};

export default ListItem;