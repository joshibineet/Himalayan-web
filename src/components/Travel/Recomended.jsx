import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { IoCloudOutline } from "react-icons/io5";
import { PiMountainsFill } from "react-icons/pi";
import { GiRiceCooker } from "react-icons/gi";
import { FaPersonHiking } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { useState } from "react";
import img from "../../assets/Rectangle 120.png";
import logo from "../../assets/minifooterimg4.png";
import logoo from "../../assets/logo2.png";
import map from "../../assets/mapimg.png";
import RecomendedCard from "./component/Recomended";
import { tourData } from "./component/data";

const Recomended = () => {
  {
    /* form section*/
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Message:", message);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <section className="">
      <div className=" w-[80rem] px-24 h-[840px] mt-10">
        {/* Glance styling box section */}
        <div className=" w-[30rem] border shadow-xl h-[840px] pt-4 ">
          <div className="bg-[#235789] w-72  items-center h-16 flex justify-between    ">
            <h1 className="text-white font-bold ml-6 text-xl">At a Glance</h1>
            <div
              className="bg-white w-10 h-16  "
              style={{ clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)" }}
            ></div>
          </div>

          {/* detail information with icons*/}
          <div className="  w-[25rem] mx-7">
            {/* time duration icons  */}
            <div className="flex items-center mt-3 gap-4">
              <MdOutlineWatchLater className="text-3xl text-[#235789]" />
              <div>
                <p className="text-gray-400 relative top-3">Duration</p>
                <p className="text-lg relative bottom-1">4 Hours</p>
              </div>
            </div>
            <hr className="border-t border-gray-400 flex-grow mt-0"></hr>

            {/* Trip Grade/*/}
            <div className="flex items-center mt-3  gap-4">
              <IoStatsChart className="text-3xl  text-[#235789]" />
              <div>
                <p className="text-gray-400 relative top-3">Trip Grade</p>
                <p className="text-lg relative bottom-1">Easy</p>
              </div>
            </div>
            <hr className="border-t border-gray-400 flex-grow  mt-0"></hr>

            {/* best season */}
            <div className="flex items-center mt-3  gap-4">
              <IoCloudOutline className="text-3xl  text-[#235789]" />
              <div>
                <p className="text-gray-400 relative top-3">Best Seasons</p>
                <p className="text-lg relative bottom-1">Mar-Jul, Sep-Dec</p>
              </div>
            </div>
            <hr className="border-t border-gray-400 flex-grow  mt-0"></hr>

            {/* max altitude*/}
            <div className="flex items-center mt-3  gap-4">
              <PiMountainsFill className="text-3xl  text-[#235789]" />
              <div>
                <p className="text-gray-400 relative top-3">Max Altitude</p>
                <p className="text-lg relative bottom-1">5460m Khyangjang valley</p>
              </div>
            </div>
            <hr className="border-t border-gray-400 flex-grow  mt-0"></hr>

            {/* meals */}
            <div className="flex items-center mt-3  gap-4">
              <GiRiceCooker className="text-3xl  text-[#235789]" />
              <div>
                <p className="text-gray-400 relative top-3">Meals</p>
                <p className="text-lg relative bottom-1">B, L, D during Trek</p>
              </div>
            </div>
            <hr className="border-t border-gray-400 flex-grow  mt-0"></hr>

            {/* Nature of trip*/}
            <div className="flex items-center mt-3  gap-4">
              <FaPersonHiking className="text-3xl  text-[#235789]" />
              <div>
                <p className="text-gray-400 relative top-3">Nature Of Trip</p>
                <p className="text-lg relative bottom-1">Mountain Skiing Tour</p>
              </div>
            </div>
            <hr className="border-t border-gray-400 flex-grow  mt-0"></hr>

            {/* accomodation*/}
            <div className="flex items-center mt-3  gap-4">
              <FaBed className="text-3xl  text-[#235789]" />
              <div>
                <p className="text-gray-400 relative top-3">Accomodation</p>
                <p className="text-lg relative bottom-1">Hotel, Resort</p>
              </div>
            </div>
            <hr className="border-t border-gray-400 flex-grow  mt-0"></hr>
          </div>
        </div>
      </div>

      {/* recommendend Tours*/}

      <div className="flex  gap-6">
        {/* flex for 1st column*/}
        <div className=" w-[30rem] ml-20 h-[800px] mt-5 ">
          {/* Glance styling box section */}
          <div className="  w-[30rem]  border shadow-xl h-[800px] pt-5  ">
            <div className="bg-[#235789] w-72  justify-between items-center h-16 flex relative bottom-4   ">
              <h1 className="text-white ml-6 font-bold text-xl ">
                Recommended Tours
              </h1>
              <div
                className="bg-white w-10 h-16  "
                style={{ clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)" }}
              ></div>
            </div>

            {/* detail information with icons*/}
            <div className=" w-[25rem] pt-2  mx-7">

              {
                tourData.tours?.map((item)=>{
                  return (<>
                  <RecomendedCard title={item.name} image={item.image} days={item.duration} icon={item.image} />
                  </>)
                })
              }
            </div>
          </div>
        </div>

        {/* Map section 2nd column*/}

        <div className="pl-1">
          <div className="w-[48rem]    h-[50rem] mt-12 ">
            <div className=" w-[48rem]  border shadow-xl h-[50rem] pt-5 ">
              <div className="bg-[#235789]  w-72 gap-4 items-center h-16 flex justify-between relative bottom-4   ">
                <h1 className="text-white ml-6 font-bold text-xl ">Maps</h1>
                <div
                  className="bg-white w-10 h-16  "
                  style={{ clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)" }}
                ></div>
              </div>

              <div className="mx-5 my-5 h-[35rem]  ">
                <img
                  className=" h-full w-full"
                  src={map}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mini blog section and form section*/}

      <div className="flex  gap-6 mb-20">
        {/* flex for 1st column*/}
        <div className=" w-[30rem]  ml-20 h-[52rem] mt-10 ">
          {/* Glance styling box section */}
          <div className="  w-[30rem]   border shadow-xl h-[52rem] pt-5 ">
            <div className="bg-[#235789] w-72  justify-between relative bottom-5 items-center h-16 flex    ">
              <h1 className="text-white ml-6 font-bold text-xl ">
                Recommended Tours
              </h1>
              <div
                className="bg-white w-10 h-16  "
                style={{ clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)" }}
              ></div>
            </div>

            {/* detail information with  icons*/} 
            <div className=" w-[25rem] pt-2  mx-7">
              {/* time duration icons  */}
              <div className="flex items-center mt-0 relative bottom-3 gap-4 cursor-pointer hover:bg-[#235789] hover:text-white">
                <img
                  className="w-24 h-20 "
                  src={logoo}
                  alt="img"
                />
                <div>
                  <p className=" w-60 text-lg relative mt-3">
                    Everest Base camp kala pattar/ Lodge -trek
                  </p>
                  {/* time icon with text 10 days */}
                  <div className="flex items-center gap-2 mt-2 mb-4  ">
                    <div className="w-20 h-4 flex items-center  border-r-2 gap-2">
                      <MdOutlineWatchLater className="text-[#235789]" />
                      <p className="text-sm text-gray-400 relative mt-3">10 Days</p>
                    </div>
                    {/* Trip advisor logo section*/}
                    <div className="w-32 h-4 flex items-center  gap-2 ">
                      <div className="w-6 h-4  overflow-x-hidden">
                        <div className="w-20  ">
                          <img
                            className="h-4 "
                            src={logo}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400 relative mt-3">Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-500 flex-grow mt-0 relative bottom-3 "></hr>

              {/* Trip Grade/*/}
              <div className="flex items-center mt-0 relative bottom-4  gap-4 cursor-pointer hover:bg-[#235789] hover:text-white">
                <img
                  className="w-24 h-20 "
                  src={logoo}
                  alt="img"
                />
                <div>
                  <p className=" w-60 text-lg relative mt-3">
                    Everest Base camp kala pattar/ Lodge -trek
                  </p>
                  {/* time icon with text 10 days */}
                  <div className="flex items-center gap-2  mt-2 mb-4 ">
                    <div className="w-20 h-4 flex items-center    border-r-2 gap-2">
                      <MdOutlineWatchLater className="text-[#235789]" />
                      <p className="text-sm text-gray-400 relative mt-3">10 Days</p>
                    </div>
                    {/* Trip advisor logo section*/}
                    <div className="w-32 h-4 flex items-center  gap-2">
                      <div className="w-6 h-4 overflow-x-hidden">
                        <div className="w-20  ">
                          <img
                            className="h-4 "
                            src={logo}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400 relative mt-3">Guarantee</p>
                    </div>
                  </div>
                  {/* end of time icon and trip advisor section*/}
                </div>
              </div>
              <hr className="border-t border-gray-500 flex-grow  mt-0 relative bottom-3"></hr>

              {/* best season */}
              <div className="flex items-center mt-0 relative bottom-4  gap-4 cursor-pointer hover:bg-[#235789] hover:text-white">
                <img
                  className="w-24 h-20 "
                  src={logoo}
                  alt="img"
                />
                <div>
                  <p className=" w-60 text-lg relative mt-3">
                    Everest Base camp kala pattar/ Lodge -trek
                  </p>
                  {/* time icon with text 10 days */}
                  <div className="flex items-center gap-2  mt-2 mb-4 ">
                    <div className="w-20 h-4 flex items-center   border-r-2 gap-2">
                      <MdOutlineWatchLater className="text-[#235789]" />
                      <p className="text-sm text-gray-400 relative mt-3">10 Days</p>
                    </div>
                    {/* Trip advisor logo section*/}
                    <div className="w-32 h-4 flex items-center  gap-2">
                      <div className="w-6 h-4 overflow-x-hidden">
                        <div className="w-20  ">
                          <img
                            className="h-4 "
                            src={logo}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400 relative mt-3">Guarantee</p>
                    </div>
                  </div>
                  {/* end of time icon and trip advisor section*/}
                </div>
              </div>
              <hr className="border-t border-gray-500 relative bottom-3 flex-grow  mt-0"></hr>

              {/* max altitude*/}
              <div className="flex items-center mt-0 relative bottom-4  gap-4 cursor-pointer hover:bg-[#235789] hover:text-white">
                <img
                  className="w-24 h-20 "
                  src={logoo}
                  alt="img"
                />
                <div>
                  <p className=" w-60 text-lg relative mt-3">
                    Everest Base camp kala pattar/ Lodge -trek
                  </p>
                  {/* time icon with text 10 days */}
                  <div className="flex items-center gap-2  mt-2 mb-4  ">
                    <div className="w-20 h-4 flex items-center   border-r-2 gap-2">
                      <MdOutlineWatchLater className="text-[#235789]" />
                      <p className="text-sm text-gray-400 relative mt-3">10 Days</p>
                    </div>
                    {/* Trip advisor logo section*/}
                    <div className="w-32 h-4 flex items-center  gap-2">
                      <div className="w-6 h-4 overflow-x-hidden">
                        <div className="w-20  ">
                          <img
                            className="h-4 "
                            src={logo}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400 relative mt-3">Guarantee</p>
                    </div>
                  </div>
                  {/* end of time icon and trip advisor section*/}
                </div>
              </div>
              <hr className="border-t border-gray-500 flex-grow  mt-0 relative bottom-3"></hr>

              {/* meals */}
              <div className="flex items-center mt-o relative bottom-4  gap-4 cursor-pointer hover:bg-[#235789] hover:text-white">
                <img
                  className="w-24 h-20 "
                  src={logoo}
                  alt="img"
                />
                <div>
                  <p className=" w-60 text-lg relative mt-3">
                    Everest Base camp kala pattar/ Lodge -trek
                  </p>
                  {/* time icon with text 10 days */}
                  <div className="flex items-center gap-2  mt-2 mb-4 ">
                    <div className="w-20 h-4 flex items-center   border-r-2 gap-2">
                      <MdOutlineWatchLater className="text-[#235789]" />
                      <p className="text-sm text-gray-400 relative mt-3">10 Days</p>
                    </div>
                    {/* Trip advisor logo section*/}
                    <div className="w-32 h-4 flex items-center  gap-2">
                      <div className="w-6 h-4 overflow-x-hidden">
                        <div className="w-20  ">
                          <img
                            className="h-4 "
                            src={logo}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400 relative mt-3">Guarantee</p>
                    </div>
                  </div>
                  {/* end of time icon and trip advisor section*/}
                </div>
              </div>
              <hr className="border-t border-gray-500 flex-grow relative bottom-5  mt-2"></hr>
            </div>
          </div>
        </div>

        {/* form box*/}

        <div className="pl-1">
          <div className="w-[50rem]    h-[52rem] mt-10 ">
            <div className=" w-[50rem]   border shadow-xl h-[52rem] pt-5 ">
              <div className="bg-[#235789] relative bottom-4 w-72 gap-4 ml-12 items-center h-16 flex justify-between    ">
                <h1 className="text-white ml-6 font-bold text-xl ">
                  Make an inquiry
                </h1>
                <div
                  className="bg-white w-10 h-16  "
                  style={{ clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)" }}
                ></div>
              </div>

              {/* form section*/}

              {/* form box*/}
              <form
                onSubmit={handleSubmit}
                className="w-[45.5rem] mt-5   h-[35rem] ml-4 "
              >
                <div className="flex z-50 max-h-[30rem]  gap-10">
                  {/* first column*/}
                  <div className=" w-[45.5rem]  ">
                    {/* form input*/}
                    <div className="px-8">
                      <div className="flex  gap-5   ">
                        {/* first name*/}
                        <div className="">
                          <div>
                            <label htmlFor="firstName">First Name:</label>
                          </div>

                          <div>
                            {" "}
                            <input
                              type="text"
                              id="firstName"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                              className="border border-black w-[20rem] h-14  px-2 py-1 rounded"
                            />
                          </div>
                        </div>

                        {/* last name*/}
                        <div>
                          <div>
                            <label htmlFor="lastName">Last Name:</label>
                          </div>
                          <div>
                            <input
                              type="text"
                              id="lastName"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                              className="border border-black h-14 w-[20rem]  px-2 py-1 rounded"
                            />
                          </div>
                        </div>
                      </div>

                      {/* form input*/}
                      <div className="flex  gap-5 py-2  ">
                        {/* email*/}
                        <div>
                          <div>
                            <label htmlFor="email">Email:</label>
                          </div>
                          <div>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="border border-black h-14 w-[20rem] px-2 py-1 rounded"
                            />
                          </div>
                        </div>
                        {/* phone number*/}
                        <div>
                          <div>
                            <label htmlFor="phoneNumber">Phone Number:</label>
                          </div>
                          <div>
                            <input
                              type="tel"
                              id="phoneNumber"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                              className="border h-14 border-black w-[20rem] px-2 py-1 rounded"
                            />
                          </div>
                        </div>
                      </div>

                      {/* text area*/}
                      <div className="py-4 ">
                        <div>
                          <label htmlFor="message">Message:</label>
                        </div>
                        <div>
                          <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="border border-black min-h-[17rem]  max-h-[19rem] w-[42.5rem] px-2 py-1 rounded "
                          />
                        </div>
                      </div>

                      {/* submit button*/}
                      <div className="btn py-2">
                        <button
                          className="w-40 h-14 right-4 relative bg-red-600 rounded-md text-lg text-white hover:bg-green-700  "
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* end of form section*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomended;
