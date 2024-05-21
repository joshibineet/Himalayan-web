import React, { useState, useEffect } from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';

const RecomendedCard = ({image,title,icon,days}) => {
    
  return (<>
      <div className="flex items-center relative bottom-3 mt-0 gap-4 cursor-pointer hover:bg-[#235789] hover:text-white">
                <img
                  className="w-24 h-20 "
                  src={image}
                  alt="img"
                />
                <div>
                  <p className=" w-60 text-lg relative mt-3">{title}</p>
                  {/* time icon with text 10 days */}
                  <div className="flex items-center gap-2  mt-2 mb-4 ">
                    <div className="w-20 h-4 flex items-center   border-r-2 gap-2">
                      <MdOutlineWatchLater className="text-[#235789]" />
                      <p className="text-sm text-gray-400  relative mt-3">{days}</p>
                    </div>
                    {/* Trip advisor logo section*/}
                    <div className="w-32 h-4 flex items-center  gap-2">
                      <div className="w-6 h-4 overflow-x-hidden">
                        <div className="w-20  ">
                          <img
                            className="h-4 "
                            src={icon}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400 relative mt-3">Guarantee</p>
                    </div>
                  </div>
                  {/* end of time icon and trip advisor section*/}
                </div>
      </div>
      <hr className="border-t border-gray-400 flex-grow  mt-0 relative bottom-2"></hr>
    </>)
}

export default RecomendedCard
