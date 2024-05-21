import React from "react";
import logo from "../assets/Footer/footer logo.png";
import Img from "../assets/Footer/footerimg.png";
import { VscArrowSmallRight } from "react-icons/vsc";
import Reco from "../assets/Footer/Recommended.png";
import Assco1 from "../assets/Footer/Asscoiated1.png";
import Assco2 from "../assets/Footer/Asscoiated2.png";
import Assco3 from "../assets/Footer/Asscoiated3.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute w-full  left-0 h-[550px] bg-gradient-to-br from-gray-200 via-gray-400 to-gray-400">
      {/* Background Image */}
      <img
        src={Img}
        alt=""
        className="absolute  w-full h-full object-cover  opacity-10"
      />

      <div className="absolute max-w-6xl mx-auto px-[138px] pt-20 grid grid-cols-1 md:grid-cols-4 gap-8 z-20">
        {/* Company Info */}
        <div className="mr-5">
          <div className=" flex items-center w-[400px] ">
            <img src={logo} alt="Company Logo" className="h-16 mr-4" />
            <p className="font-merriweather text-red-600 text-base tracking-wide text-justify font-semibold">
              HIMALAYA FAIR <br /> REISEN PVT.LTD
            </p>
          </div>

          <p className=" absolute mb-4 w-[350px] text-justify mt-5">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo this is
            some dummy text.
          </p>
          <div className="flex items-center top-[280px] ml-[240px]  absolute">
            <button className="text-[#235789] hover:underline font-semibold">
              Read More
            </button>
            <VscArrowSmallRight className="text-3xl ml-1 text-[#235789]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-[500px] ">
        {/* Quick Links */}
        <div className="w-[500px] mt-[88px] text-justify ml-[160px]">
          <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Our Team</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Gallery</li>
            <li className="mb-2">Blogs</li>
            <li className="mb-2">Holiday Types</li>
          </ul>
        </div>
        {/* Destinations */}
        <div className=" mt-[88px] mr-20 absolute ml-[400px] text-justify">
          <h3 className="font-bold text-lg mb-4">DESTINATIONS</h3>
          <ul>
            <li className="mb-2">Mt.Everest</li>
            <li className="mb-2">Lhotse</li>
            <li className="mb-2">Makalu</li>
            <li className="mb-2">Dorje Lhakpa</li>
            <li className="mb-2">Mera Peak</li>
            <li className="mb-2">Ama Dablam</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className=" mt-[88px] absolute ml-[600px] ">
          <h3 className="font-bold text-lg mb-4 mr-32 ">CONTACT US</h3>
          <div className="mb-2 flex items-center">
            <div className="rounded-full bg-red-700 flex items-center justify-center h-7 w-7 mr-2">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <span>Maitedevi, Kathmandu Nepal</span>
          </div>

          <div className="mb-2 flex items-center">
            <div className="rounded-full bg-red-700 flex items-center justify-center h-7 w-7 mr-2">
              <FaEnvelope className="text-white" />
            </div>
            <span className="ml-2">himalayanfair@example.com</span>
          </div>
          <div className="mb-2 flex items-center">
            <div className="rounded-full bg-red-700 flex items-center justify-center h-7 w-7 mr-2">
              <FaPhone className="mr-1 text-white" />
            </div>
            <span>+977 94357945743</span>
          </div>
          <div className="absolute top-44 text-justify ">
            <h3 className="font-bold text-lg ">RECOMMENDED ON</h3>
            <img src={Reco} alt="" className="mt-2" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg mb-4 flex text-start ml-[138px] mt-3">ASSOCIATED WITH</h1>
        <div className="flex gap-5 ml-[140px]">
        <img src={Assco1} alt="" />
        <img src={Assco2} alt="" />
        <img src={Assco3} alt="" />
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-b border-white border-solid mt-12"></div>
      <div className="bg-gray-400 text-center py-4 flex flex-col md:flex-row items-center  absolute w-full bottom-0 justify-between px-32">
        <p className="text-sm mt-2 md:mb-0 font-medium tracking-wider">
          ©SHERPA&K EXPEDITIONS, 2022. POWERED BY:{" "}
          <span className="text-red-700"> Joshibineet</span>
        </p>
        <div className="flex justify-center items-center md:ml-4 gap-2">
          <div className="rounded-full bg-red-700 flex items-center justify-center h-8 w-8 mr-2">
            <FaFacebookF className="mx-2 text-white" />
          </div>
          <div className="rounded-full bg-red-700 flex items-center justify-center h-8 w-8 mr-2">
            <FaInstagram className="mx-2 text-white" />
          </div>
          <div className="rounded-full bg-red-700 flex items-center justify-center h-8 w-8 mr-2">
            <FaTripadvisor className="mx-2 text-white" />
          </div>
          <div className="rounded-full bg-red-700 flex items-center justify-center h-8 w-8 mr-2">
            <FaTwitter className="mx-2 text-white " />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
