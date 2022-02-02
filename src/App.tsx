import React, {useEffect, useState} from 'react';
import './App.scss';
import {UserProfile, UsersList} from "./components";
import {Route, Routes} from "react-router-dom";
import {IUser} from "./types/user";
import axios from "axios";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<UsersList />}/>
      <Route path='/profile/:id' element={<UserProfile />}/>
    </Routes>
  );
}

export default App;
