import Routes from './routes';
import './styles.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';

export default function App() {
  return (
    <div className="app">
      <Routes/>
      <ToastContainer autoClose={1200}/>
    </div>
  );
}