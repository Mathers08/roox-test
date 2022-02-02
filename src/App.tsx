import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Route, Routes,} from 'react-router-dom';
import './App.scss';
import {UserProfile, UsersList} from './components';
import SortBlock from './components/UsersList/SortBlock';
import {IUser} from './types/user';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchedItems = async () => {
      const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(users);
      setIsLoading(false);
    }
    fetchedItems();
  }, [])

  const sortUsersByAddress = () => {
    setUsers([...users].sort((a, b) => (a.address.city > b.address.city) ? 1 : -1));
  }

  const sortUsersByCompany = () => {
    setUsers([...users].sort((a, b) => (a.company!.name > b.company!.name) ? 1 : -1));
  }

  return (
    <div className='container'>
      <SortBlock sortUsersByAddress={sortUsersByAddress} sortUsersByCompany={sortUsersByCompany}/>
      <Routes>
        <Route path="/" element={<UsersList users={users} isLoading={isLoading}/>}/>
        <Route path="/profile/:id" element={<UserProfile/>}/>
      </Routes>
    </div>
  )
}

export default App;
