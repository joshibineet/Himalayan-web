import React from "react";
import img from "../../assets/About/Choose.jpeg";
import { GrSubtract } from "react-icons/gr";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";

const Choose = () => {
  return (
    <div className="relative w-full justify-center mx-16  ">
      <div className="flex flex-col md:flex-row  px-6 overflow-hidden">
        <div>
          <img
            src={img}
            alt="Amongst All"
            className="md:w-[690px] md:h-[580px] object-cover mr-10"
          />
        </div>
        <div className="p-4 relative  w-[580px]">
          <div className="absolute bottom-[565px] flex items-center">
            <span className="w-8 font-bold text-3xl mb-[55px] relative text-red-700">
              <GrSubtract />
            </span>

            <div className=" text-[#C2292E] text-sm  font-semibold font-[Be Vietnam Pro] leading-tight ml-2 mb-[55px]   ">
              AMONGST ALL
            </div>
          </div>

          <h2 className=" mt-2 font-merriweather text-3xl font-bold leading-[45.25px] text-left">
            Why Choose Us?
          </h2>
          <p className="mt-6 w-[540px] font-work-sans text-base font-normal leading-6 text-justify tracking-wider text-[#655C5C]">
            choose himalayan fair reisen for your himalayan adventure and embark
            on a journey of a lifetime. With our team of experienced
            professionals, personalized service, and commitment to safety and
            responsible tourism, we ensure that every aspect of your trek is
            expertly planned and executed. From customizing itineraries to
            prioritizing your safety and minimizing environmental impact, we
            strive to provide unparalleled experiences that leave you with
            cherished memories. Whether you're trekking to Everest Base Camp,
            exploring the Annapurna region, or immersing yourself in the vibrant
            culture of Nepal, Himalayan Fair Reisen promises unforgettable
            adventures that will exceed your expectations. Join us and discover
            the magic of the Himalayas with confidence and peace of mind.
          </p>
          <ul className="flex flex-wrap justify-start mt-6 ">
            <li className="flex items-center w-1/2 mb-4">
              <IoMdCheckmarkCircle className="text-red-700" />
              <span className="text-gray-700 ml-2">Diverse destinations</span>
            </li>
            <li className="flex items-center w-1/2 mb-4">
              <IoMdCheckmarkCircle className="text-red-700" />
              <span className="text-gray-700 ml-2">Support Team</span>
            </li>
            <li className="flex items-center w-1/2 mb-4">
              <IoMdCheckmarkCircle className="text-red-700" />
              <span className="text-gray-700 ml-2">Beautiful Places</span>
            </li>
            <li className="flex items-center w-1/2 mb-4">
              <IoMdCheckmarkCircle className="text-red-700" />
              <span className="text-gray-700 ml-2">Value For Money</span>
            </li>

            <li className="flex items-center w-1/2 mb-4">
              <IoMdCheckmarkCircle className="text-red-700" />
              <span className="text-gray-700 ml-2">Fast Booking</span>
            </li>
            <li className="flex items-center w-1/2 mb-4">
              <IoMdCheckmarkCircle className="text-red-700" />
              <span className="text-gray-700 ml-2">Memorable Experience</span>
            </li>
            <li className="flex items-center w-1/2 mb-4">
              <IoMdCheckmarkCircle className="text-red-700" />
              <span className="text-gray-700 ml-2">Safe Travel</span>
            </li>
            <li className="flex items-center w-1/2 mb-4">
              <IoMdCheckmarkCircle className="text-red-700" />
              <span className="text-gray-700 ml-2">Awesome Guide</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-700 relative ml-[1260px] bottom-4 cursor-pointer hover:bg-red-700">
        <ImWhatsapp className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Choose;
