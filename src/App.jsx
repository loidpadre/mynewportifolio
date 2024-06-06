import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Section1 from './section1';
import Project from './components/project';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar/>
        <Header/>
        <Section1/>
        <Project/>
      </div>
    </div>
  );
}

export default App;
