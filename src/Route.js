import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import ContactPage from './pages/contact';
import './assets/css/defaults.css';
import './assets/css/style.scss';

const Routeing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}>
          </Route> 
          <Route path="/dashboard" element={<DashboardPage/>}>
          </Route>
          <Route path="/contact" element={<ContactPage/>}>
          </Route> 
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default Routeing;
