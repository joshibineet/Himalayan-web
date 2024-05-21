import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const Rootlayout = () => {
  return (
    <div>
       <div className='' >
     <Navbar />
     <main>
      <Outlet />
     </main>
     <Footer />

    </div>
    </div>
  )
}

export default Rootlayout;
