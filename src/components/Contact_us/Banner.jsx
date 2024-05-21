import React from 'react';
import Main from "../../assets/About/Banner.jpeg";

const Banner = () => {
  return (
    <section>
    {/* about-us img */}
    <figure className='relative bg-cyan-600'>
        <img className='h-[550px]  w-full opacity-50' src={Main} alt='nature'/>
        <div className='absolute top-60 right-[650px]'>
            <h1 className='text-white text-5xl'>Contact us</h1>
        </div>
    </figure>

    
      
    </section>
  );
}

export default Banner;
