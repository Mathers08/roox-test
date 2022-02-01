import React from 'react';
import './App.scss';
import {UserProfile, UsersList} from "./components";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<UsersList/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
    </Routes>
  );
}

export default App;
