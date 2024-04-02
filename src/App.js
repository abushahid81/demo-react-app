import React from 'react';
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Service from "./Pages/Service"
// import AboutList from "./Pages/AboutList";
import './App.css';


function App() {
  return (
  <>
  <Header/>
  <Footer/>
  <About/>
  <Blog/>
  <Contact/>
  <Home/>
  <Service/>
  {/* <AboutList/> */}
  </>
  );
}

export default App;
