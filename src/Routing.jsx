// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import Otp from './Otp';
import Dashboard from './Dashboard';

function Routing() {
  return (
    <Router>
      <div>
        
        <Routes>
            {/* routing for the defualt component  that is appjsx */}
          <Route path="/"  element={<App/>} />
          {/* otp component for verifiying user otp  */}
          <Route path="/Otp"  element={<Otp/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />

        </Routes>
       
        
      </div>
    </Router>
  );
}

export default Routing;
