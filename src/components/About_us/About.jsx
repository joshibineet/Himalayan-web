import React from 'react'
import { GrSubtract } from "react-icons/gr";
import img from"../../assets/About/About.jpeg";

const About = () => {
  return (
    <div className='container grid grid-cols-2 px-[70px] my-20 gap-5'>
    <div>
    <div className='flex items-center'>
    <span className='w-8 font-bold text-3xl text-red-700'><GrSubtract /></span>
        <h3 className='text-red-700'>ABOUT HIMALAYAN FAIR RESIEN</h3>

    </div>
    <div>
        <h1 className='text-4xl font-bold leading-snug'>
        BEST TREKKING PARTNER FOR YOUR HOLIDAYS
        </h1>
        </div>
        <div>
            <p className='leading-loose text-justify'>At Himalayan Fair Reisen, safety is paramount. Our guides are trained in wilderness first aid and possess the expertise to navigate the rugged Himalayan terrain safely. Moreover, we prioritize responsible tourism, . Whether you dream of standing atop the world's highest peaks, immersing yourself in the vibrant cultures of Himalayan villages, or simply escaping the hustle and bustle of daily life, Himalayan Fair Reisen is here to transform your dreams into reality. Join us on an unforgettable adventure and discover the enchanting beauty of the Himalayas with Himalayan Fair Reisen. With our dedicated team of experienced guides and a passion for exploration, we're committed to providing personalized and immersive adventures that cater to all levels of trekkers.</p>
        </div>
        </div>

        {/*image*/}
        <div>
        <div>
            <img src={img} alt='img'/>
        </div>
        </div>
        </div>
  )
}

export default About
