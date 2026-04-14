import React from 'react'
import "./App.css";
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import NewArrivals from './components/NewArrivals';
import About from './components/About';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';

const App = () => {
  return (<>
    <NavBar />
    <Hero />
    <Features />
    <NewArrivals />
    <About />
    <Categories />
    <Testimonials />
    <Partners />
    <ContactForm />
  </>
  )
}

export default App;