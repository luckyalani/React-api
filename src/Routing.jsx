// App.js

import React,{Suspense,lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import Otp from './Otp';
// import Dashboard from './Dashboard';
import Material from './MaterialUi/Components/Material';
import CurrencyConverter from './MaterialUi/Components/CurrencyConverter';
// dashoboard component 
const MyComponent = lazy(() => import('./Dashboard'));


function Routing() {
  return (
    <Router>
      <div>
        
        <Routes>
            {/* routing for the defualt component  that is appjsx */}
          <Route path="/"  element={<App/>} />
          {/* otp component for verifiying user otp  */}
          <Route path="/Otp"  element={<Otp/>} />
          <Route path="/dashboard"  element={
            <Suspense fallback={<div>Loading...</div>}>
            <MyComponent/>
            </Suspense>

            } />
          <Route path="/Material"  element={<Material/>} />
          <Route path="/CurrencyConverter"  element={<CurrencyConverter/>} />

        </Routes>
       
        
      </div>
    </Router>
  );
}

export default Routing;
