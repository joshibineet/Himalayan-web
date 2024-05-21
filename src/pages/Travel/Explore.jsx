import React from 'react'
import { GrSubtract } from "react-icons/gr";


const Explore = () => {
  return (
    <div className='mt-10 '>
       <div className="relative ml-24">
        <div className="flex items-center justify-start ml-1">
        <span className='w-10 font-bold text-xl text-red-700'><GrSubtract /></span>
          <h2 className="text-sm text-[#C22932] mb-1 absolute ml-6 font-medium">
            EXPLORE THE WORLD
          </h2>
        </div>

        <h3 className="text-3xl font-semibold mb-8">Langtang Valley Trek</h3>
      </div>
    </div>
  )
}

export default Explore;
