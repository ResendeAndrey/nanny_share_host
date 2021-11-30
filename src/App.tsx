import React from 'react';
import { ToastContainer } from 'react-toastify';

import '../src/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css'

import RoutesNanny from './routes/routes';


function App() {
  return (
    <div className="App">  
      <RoutesNanny />
      <ToastContainer autoClose={4000} className="toast-container"/> 
    </div>
  );
}

export default App;
