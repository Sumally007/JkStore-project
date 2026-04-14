import React from 'react'
import "./App.css";
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import NewArrivals from './components/NewArrivals';

const App = () => {
  return (<>
    <NavBar />
    <Hero />
    <Features />
    <NewArrivals />
  </>
  )
}

export default App;