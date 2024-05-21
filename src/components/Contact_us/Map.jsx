import React from 'react'

const Map = () => {
  return (
    <section >
    {/* heading text */}
     
     <div className='relative font-bold text-3xl mx-20 my-20 mb-7 mt-32'>
        <h1>Find us on Google map</h1>
     </div>

     {/* location map section*/}
     <div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4440.231749732076!2d85.33049648612528!3d27.7059692782352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a000ac6259%3A0x9d9f16732861e650!2sMaitidevi%20Temple!5e0!3m2!1sen!2snp!4v1712374181069!5m2!1sen!2snp" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
      

    </section>
  )
}

export default Map
