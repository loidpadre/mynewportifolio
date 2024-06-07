import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Section1 from './section1';
import Project from './components/project';
import LetWork from './components/LetWork';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/footer';
import Links from './components/links';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar/>
        <Header/>
        <Section1/>
        <Project/>
        <LetWork/>
        <Skills/>
        <Contact/>
        <Links/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
