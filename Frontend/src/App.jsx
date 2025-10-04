import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingPage from './pages/SettingPage';
import ProfilePage from './pages/ProfilePage';


const app = () => {
  return(
    <div >
    <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="/signup" element={<SignUpPage/>}/>
      <Route path ="/login" element={<LoginPage/>}/>
      <Route path ="/setting" element={<SettingPage/>}/>
      <Route path ="/profile" element={<ProfilePage/>}/>
    </Routes>
    </div>
  );
}

export default app;
  