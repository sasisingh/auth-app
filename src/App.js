import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Protected from './pages/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/dashboard" element={<Protected Component ={DashBoard}/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
