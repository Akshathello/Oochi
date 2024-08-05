import React from 'react';
import Navbar from "./component/Navbar.jsx";
import LandingPage from "./component/LandingPage.jsx";
import Marquee from './component/Marquee.jsx';
import About from "./component/About.jsx";
import Eyes from "./component/Eyes.jsx";
import Featured from './component/Featured.jsx';
import Cards from "./component/Cards.jsx";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900' >
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/> 
      <Featured/> 
      <Cards/>
    </div>
  )
}

export default App
