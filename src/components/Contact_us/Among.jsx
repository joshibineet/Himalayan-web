import React from 'react'
import { GrSubtract } from "react-icons/gr";
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";

const Among = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
  
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("Message:", message);
      
  
  
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
    };

    const a = "asdf";
  
  return (
    <main >
     
    {/* form text section*/}
   <div className=' relative w-[80rem] px-20 my-20 mb-16 '>
   {/* form text*/}
   <div className='flex  items-center'>
       <span className='w-8 font-bold text-xl text-red-700'><GrSubtract /></span>
       <h3 className='text-red-700 text-xl'>{a}</h3>
       </div>

       {/* form heading text*/}
       <h1 className='font-bold text-4xl'>Feel Free To Contact With Us</h1>
       </div>


       {/* form box*/}
       <form onSubmit={handleSubmit} className='w-[80rem]   h-[25.5rem] mx-20 '>
       <div className='flex  max-h-[30rem]  gap-10'>
         {/* first column*/ }
         <div className='border shadow-xl  w-[60rem]  '>
         {/* form input*/}
         <div className='px-8 py-8'>
           <div className='flex gap-5 py-2  '>

           {/* first name*/}
             <div>
             <div><label htmlFor="firstName">First Name:</label></div>

      <div> <input 
         type="text" 
         id="firstName" 
         value={firstName} 
         onChange={(e) => setFirstName(e.target.value)} 
         required  className='border border-black w-[25rem]  px-2 py-1 rounded'
       /></div>
        </div>

        {/* last name*/}
        <div>
        <div><label htmlFor="lastName">Last Name:</label></div>
       <div><input 
         type="text" 
         id="lastName" 
         value={lastName} 
         onChange={(e) => setLastName(e.target.value)} 
         required className='border border-black w-[25rem]  px-2 py-1 rounded'
       /></div>

        </div>
        </div>

        {/* form input*/}
        <div className='flex  gap-5 py-2  '>
         {/* email*/}
         <div >
         <div><label htmlFor="email">Email:</label></div>
       <div><input 
         type="email" 
         id="email" 
         value={email} 
         onChange={(e) => setEmail(e.target.value)} 
         required className='border border-black w-[25rem] px-2 py-1 rounded'
       /></div>
         </div>
         {/* phone number*/}
         <div>
         <div><label htmlFor="phoneNumber">Phone Number:</label></div>
       <div><input 
         type="tel" 
         id="phoneNumber" 
         value={phoneNumber} 
         onChange={(e) => setPhoneNumber(e.target.value)} 
         required className='border border-black w-[25rem] px-2 py-1 rounded'
       /></div>
         </div>

        </div>

        {/* text area*/}
        <div className='py-4 '>
        <div><label htmlFor="message">Message:</label></div>
       <div><textarea 
         id="message" 
         value={message} 
         onChange={(e) => setMessage(e.target.value)} 
         required className='border border-black h-28 mt-2 w-full px-2 py-1 rounded '
       /></div>
        </div>

        {/* submit button*/}
        <div className='btn py-2 left-[100px] absolute'>
        <button className='w-40 h-12 bg-red-700 rounded-md text-lg text-white hover:bg-green-700  r ' type="submit">Send Message</button>
        </div>
        </div>



           
         </div>
         {/* second column*/}
         <div  className=' w-96 ml-1'>

           {/* heading text  section*/}
           <h1 className='py-2 text-xl '>Have any Questions?</h1>
           <p className='text-justify'>Don't hesitate to contact us with any questions, concerns, or requests you may have. Our team is dedicated to providing exceptional service and support to ensure your experience with us is enjoyable. </p>

           {/* phone icon section*/}
           <div className='flex gap-4 py-3'>
          <div className='border-2 border-red-700 w-14 h-14 flex items-center px-3 text-2xl'>
         <span className='text-red-700'><FaPhoneAlt /></span>
         </div>
        {/*text section*/}
        <div className='relative'>
        <p className='font-bold'>Call Us</p>
        <p className=' absolute flex w-[200px] top-7 '>+977 03240352543</p>
       </div>
       </div>
       {/*location icon section*/}
       <div className='flex gap-4 py-3 mt-3'>
       <div className='border-2 border-red-700 w-14 h-14 flex items-center px-3 text-2xl'>
       <span className='text-red-700 '><FaLocationDot /></span>
        </div>
       {/*text section*/}
       <div className='relative'>
       <p className='font-bold'>Visit Us</p>
       <p className='absolute flex w-[300px] top-7 '>Maitedevi, Kathmandu, Nepal</p>
       </div>
       </div>

       {/* mail icons */}

       <div className='flex gap-4 py-3 mt-3 '>
       <div className='border-2 border-red-700 w-14 h-14 flex items-center px-3 text-2xl'>
       <span className='text-red-700'><AiFillMail /></span>
        </div>
       {/*text section*/}
       <div className='relative'>
       <p className='font-bold '>Mail Us</p>
       <p className='absolute flex w-[200px] top-7 '>info@example.com</p>
       </div>
       </div>

       </div>
       </div>

       </form>



     
   </main>
 )
}

export default Among
