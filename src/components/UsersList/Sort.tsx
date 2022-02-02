import React, {FC} from 'react';
import './UsersList.scss';
import {IUser} from "../../types/user";

interface SortProps {
  users: IUser[];
  setUsers: any;
}

const Sort: FC<SortProps> = ({users, setUsers}) => {
  const sortByAddress = () => {
    setUsers([...users].sort((a, b) => (a.address.city > b.address.city) ? 1 : -1));
  }

  const sortByCompany = () => {
    setUsers([...users].sort((a, b) => (a.company!.name > b.company!.name) ? 1 : -1));
  }

  return (
    <div className="sort">
      <p>Сортировка</p>
      <button onClick={sortByAddress} className='btn'>по городу</button>
      <button onClick={sortByCompany} className='btn'>по компании</button>
    </div>
  );
};

export default Sort;