import React, { use } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import SettingPage from './pages/SettingPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

import { useAuthStore } from './store/useAuthStore.js';
import { useEffect } from 'react';


const app = () => {
  const {authuser, checkauth} = useAuthStore();
  useEffect(() => {
    checkauth();
  }, [checkauth]
);

console.log("Auth User:", authuser);
  return(
    


 
    <div >
      <Navbar />


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
  