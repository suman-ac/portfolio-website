import React from 'react'
import './App.css';
import Home from './components/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Navbar />
<Routes>
  <Route path = '/' element ={<Home />} />
  <Route path = '/contact' element ={<Contact /> } />
  <Route path = '/projects' element ={<Projects /> } />
 <Route  path="*" element={<Navigate to="/" replace />} />
</Routes>
<Footer />
    </>
  )
}


export default App;