import React, { useRef } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

export default function App() {
  const footerRef = useRef(null);

  return (
    <>
      <Navbar footerRef={footerRef}/>
      <Outlet/>
      <Footer ref={footerRef}/>
    </>
  )
}
