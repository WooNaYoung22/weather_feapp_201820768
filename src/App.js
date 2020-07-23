import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import RouterApp from './RouterApp';

function App() {
  const cityName = "Seoul";

  console.log(BrowserRouter);
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
};

export default App;