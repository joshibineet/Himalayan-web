import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image1 from '../../assets/bannerimg1.png';
import Image2 from '../../assets/bannerimg2.png';
import Logo from "../../assets/touristreviewimg.png";
import { GrSubtract } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";


const Book = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Image1, Image2]; // Provide image paths directly

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [userProfile, setUserProfile] = useState('');
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(0);
  const [showLoadMore, setShowLoadMore] = useState(false); // Initially set to false
  
  const [showBookingForm, setShowBookingForm] = useState(false); // State for booking form visibility

  {/* book form with detail*/}

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [preferredDestination, setPreferredDestination] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [numRooms, setNumRooms] = useState(1);
  const [numBedsPerRoom, setNumBedsPerRoom] = useState(1);
  const [accommodationBudget, setAccommodationBudget] = useState('');
  

  // Handle form submission
  const handleSubmitbook = (e) => {
    e.preventDefault();
    // Perform any necessary validation here

    // Prepare data for submission
    const formData = {
      name: name,
      email: email,
      country: country,
      adults: adults,
      children: children,
      startDate: startDate,
      endDate: endDate,
      preferredDestination: preferredDestination,
      accommodationType: accommodationType,
      numRooms: numRooms,
      numBedsPerRoom: numBedsPerRoom,
      accommodationBudget: accommodationBudget
    };

    // Send formData to backend or perform any necessary actions
    console.log(formData);
    
    // Optionally reset form fields after submission
    setName('');
    setEmail('');
    setCountry('');
    setAdults(1);
    setChildren(0);
    setStartDate('');
    setEndDate('');
    setPreferredDestination('');
    setAccommodationType('');
    setNumRooms(1);
    setNumBedsPerRoom(1);
    setAccommodationBudget('');
  };








  {/* end of detail form*/}


{/* slide*/}
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }, 3000);

  return () => clearInterval(interval);
}, [slides.length]);
{/* endsslide*/}

  useEffect(() => {
    // Load comments from local storage if available
    const storedComments = JSON.parse(localStorage.getItem('comments'));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    // Save comments to local storage whenever comments change
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleWriteReview = () => {
    setShowCommentBox(true);
  };

  const handleSubmit = () => {
    if (comment.trim() !== '' && userName.trim() !== '' && rating !== 0) {
      const newComment = {
        comment,
        userProfile,
        userName,
        rating,
        date: new Date().toLocaleDateString()
      };
      setComments([newComment, ...comments]);
      setComment('');
      setUserName('');
      setUserProfile('');
      setRating(0);
      setShowCommentBox(false);
    }
  };

  const handleDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleLoadMore = () => {
    setShowLoadMore(true); // Set showLoadMore to true when clicked
  };

  {/* booking trip pop up*/}
  const handleBookTrip = () => {
    setShowBookingForm(true);
  };

  // Function to handle form submission
  const handleBookingSubmit = () => {
    // Handle booking form submission logic
  };


  // Function to handle closing booking form
  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };




  {/* end section of booking trip*/}


  

  const visibleComments = showLoadMore ? comments : comments.slice(0, 3); // Show all comments if showLoadMore is true

  return (
    <Main>
    <section className='mt-10'>
      <div className='container h-[18rem]'>
        <div className='image-container  w-[1500px] right-3 relative h-full'>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className='text-overlay w-[60rem] h-[10rem]'>
          <h1 className='text-5xl text-white  '>Unveiling the Mysteries of the Wild</h1>
          <p className='mt-4 text-gray-200 text-lg'>Embark on Unforgettable Journeys</p>
          <button className='mt-3 bg-DarkRed text-xl text-white px-9 py-3 bg-red-700 rounded-md hover:bg-green-700' onClick={handleBookTrip}  >Book This Trip</button>
        </div>
      </div>
    </section>
{/* booking Trip form*/}


{showBookingForm && (

      <BookingFormContainer className='  w-[100rem]    h-[80rem]'>
     <div className='bg-white mx-[30rem] h-[40rem] w-[43rem] '>
        <BookingForm className=' h-[30rem] mt-72'>
        <div className='flex justify-end'>
      <button className='text-Bluish hover:text-DarkRed  text-xl' onClick={handleCloseBookingForm}><IoCloseCircle />
</button>
      </div>
          
        <div className='flex justify-center text-3xl font-bold '>
        <h1 className='mb-10 text-Bluish'>Fill Up The Form <hr className='border border-Bluish'/> </h1>
        </div>
       
          

         <form  onSubmit={handleSubmitbook}>
          <div className='flex gap-[5rem]   mb-4 h-10 items-center'>
      <div className=' border ml-12 px-2 py-2 rounded-md  border-gray-300'>
      <label className='pr-2 text-gray-400' htmlFor="name">Name:</label>
        <input
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required className=''
        />
      </div>
      <div className=' px-2 py-2 rounded-md   border border-gray-300'>
        <label className='pr-2  text-gray-400' htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      </div>
     
     <div className='flex gap-[5rem] mb-4  h-10 items-center'>
      <div className=' border rounded-md   ml-12   px-2 py-2 border-gray-300'>
        <label className='pr-2  text-gray-400' htmlFor="adults">Adults:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => setAdults(parseInt(e.target.value))}
          required
          min="1" className='w-[10.9rem]'
        />
      </div>
      <div className=' border rounded-md    px-2 py-2 border-gray-300'>
        <label className='pr-2  text-gray-400' htmlFor="children">Children:</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => setChildren(parseInt(e.target.value))}
          required
          min="0" className='w-[9.7rem]'
        />
      </div>
      </div>


      <div className='flex gap-[5rem] mb-4  h-10 items-center'>
      <div className=' px-2 py-2  ml-12 rounded-md  border border-gray-300'>
        <label className='pr-2  text-gray-400' htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required className='w-[9.2rem]'
        />
      </div>
      <div className=' px-2 py-2 rounded-md  border border-gray-300'>
        <label className='pr-2  text-gray-400' htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required className='w-[9.3rem]'
        />
      </div>
      </div>
   
   {/* option list*/}
   <div className='flex gap-[5rem] mb-4  h-10 items-center'>
<select className=' w-[15.7rem] rounded-md  text-gray-400  ml-12 px-2 py-2 border border-gray-300' value={accommodationType} onChange={(e) => setAccommodationType(e.target.value)} required>
              <option  value="">Select Accommodation Type</option>
              <option value="Hostel">Hostel</option>
              <option value="Hotel">Hotel</option>
              <option value="Vacation Rental">Vacation Rental</option>
            </select>
            <select className=' px-2 py-2 w-[15.2rem]  text-gray-400 rounded-md  border border-gray-300' value={accommodationBudget} onChange={(e) => setAccommodationBudget(e.target.value)} required>
              <option value=""> Accommodation  Range</option>
              <option value="Budget">Budget</option>
              <option value="Mid-Range">Mid-Range</option>
              <option value="Luxury">Luxury</option>
            </select>
            </div>

           <div className='flex gap-[5rem] mb-4   h-10 items-center'>
            <select className=' px-2 py-2  ml-12 w-[15.6rem]  text-gray-400 rounded-md  border border-gray-300' value={country} onChange={(e) => setCountry(e.target.value)} required>
              <option value="">Select Country</option>
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
              <option value="China">China</option>
              
            </select>

            <select className=' w-[15.2rem] rounded-md  text-gray-400  px-2 py-2 border border-gray-300' value={preferredDestination} onChange={(e) => setPreferredDestination(e.target.value)} required>
              <option value="">Select Preferred Destination</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Chitwan">Chitwan</option>
              <option value="Lumbini">Lumbini</option>
              
            </select>
            </div>



{/* end option list*/}






      <div className='flex gap-[5rem] mb-4  h-10 items-center'>
      <div className=' px-2 py-2  ml-12 border rounded-md  border-gray-300 '>
        <label className='pr-2  text-gray-400' htmlFor="numRooms">Number of Rooms:</label>
        <input
          type="number"
          id="numRooms"
          value={numRooms}
          onChange={(e) => setNumRooms(parseInt(e.target.value))}
          required
          min="1" className='w-[5.6rem]'
        />
      </div>
      <div className=' px-2 py-2 border rounded-md  border-gray-300'>
        <label className='pr-2  text-gray-400' htmlFor="numBedsPerRoom">Number of Beds:</label>
        <input
          type="number"
          id="numBedsPerRoom"
          value={numBedsPerRoom}
          onChange={(e) => setNumBedsPerRoom(parseInt(e.target.value))}
          required
          min="1" className='w-[6rem]'
        />
      </div>
      </div>

      <div className='flex gap-[3rem]  h-10 items-center'>
      <button className= 'w-28 ml-[17.5rem]  text-Bluish border  border-Bluish hover:bg-Bluish hover:text-white rounded-md  py-2' type="submit">Submit</button>

      </div>

      <div className=' h-32 w-[43rem]'>
      <div className=' flex justify-center '>
        <h1 className='my-4 text-2xl font-bold text-Bluish'>Have A Wonderfull Trip</h1>
      </div>
      <div className='flex justify-center'>
      <p className='text-gray-400'>Thanks For Visiting Us<hr className='border border-gray-400' /></p>
      </div>
      
    </div>



    </form>

    
  







        </BookingForm>
        </div>
      </BookingFormContainer>
    )}

{/* end of section booking trip*/}


    <div className=' w-[80rem] mx-20  my-20 mb-10 '>
      <div className='flex items-center'>
        <span className='w-8 font-bold text-3xl text-red-700'><GrSubtract /></span>
        <h3 className='text-red-700 text-sm'>TOURS REVIEWS</h3>
      </div>
      <h1 className='font-bold text-4xl'>What other Travellers has to <br /> says?</h1>
    </div>

    <div className="container  mt-8">
      <div className="flex w-[80rem] mx-20  justify-end">
      <button className="border-1 font-semibold border-[#235789] text-[#235789] w-[150px] mr-10 h-[43px] rounded-md hover:text-white hover:bg-[#235789]" onClick={handleSubmit}>
          Submit
        </button>
        <button className="w-[170px] font-semibold h-[43px] text-white bg-[#235789] rounded-md hover:bg-red-700" onClick={handleWriteReview}>
          Write a Review
        </button>
      </div>

      {showCommentBox && (
        <div className="mt-4 w-[84rem] mx-20 ">
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Your Profile"
            value={userProfile}
            onChange={(e) => setUserProfile(e.target.value)}
            className="w-full border rounded p-2 mb-2"
          />
          <textarea
            className="w-full h-24 border rounded p-2 mb-2"
            placeholder="Write your review..."
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <div className="flex items-center mb-2">
            <p className="mr-2">Rating:</p>
            {[1, 2, 3, 4, 5].map((index) => (
              <span key={index} className={`text-2xl cursor-pointer ${index <= rating ? 'text-DarkRed' : 'text-gray-300'}`} onClick={() => setRating(index)}>&#9733;</span>
            ))}
          </div>
          <button className=" text-white px-4 py-2 rounded mb-3 mx-2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}

      <div className="mt-4">
        {visibleComments.map((commentObj, index) => (
          <div key={index} className="border rounded  mx-20 w-[80rem] p-4 mb-4">
            <div className="flex  w-[78rem] border-black  mb-2">
              <div className="flex  gap-5 items-center">
                <img src={commentObj.userProfile} alt="User Profile" className="w-8 h-8 rounded-full mr-2" />
              </div>
              <div className='  ml-11'>
              <p className='  ml-2   w-[70.5rem]'>{commentObj.comment}</p></div>
            </div>
            <div className="  w-[72.5rem] flex ml-[5.5rem] justify-between ">
              <div>
                <p className=" font-semibold text-gray-400">{commentObj.userName}</p>
                {[...Array(commentObj.rating)].map((_, i) => (
                  <span key={i} className="text-DarkRed hover:text-DarkRed text-xl">&#9733;</span>
                ))}
              </div>
              <div className='flex  '>
                <p className="text-sm  pt-1 text-gray-400">{commentObj.date}</p>
                <button className="text-red-500 ml-2    h-5 pt-1 " onClick={() => handleDelete(index)}><MdDelete className='text-lg hover:text-DarkRed text-Bluish' /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/*Tourist review section*/ }
      <div className=' w-[80rem] mx-20 h-52 border border-gray-300 rounded-md'>
      <div className='w-28 h-28 flex   '>
        <img className='rounded-full my-4 mx-3' src={Logo} alt='img'/>
     {/* comment section*/}
     <div className=' w-[76rem]  '>
      <div className=' w-[72.5rem] my-4 h-28 '>
        <p className='mx-2 py-2 '>“OMG! I cannot believe that I have so much fun on my trip. It was super good and fantastic.”</p>
      </div>
      <div className=' flex justify-between'>
      <div className=' text-gray-400'>
        <p className='mx-2 relative bottom-5'>Cameron Williamson</p>
        <div className='flex gap-2 text-red-700 relative bottom-6  mx-2 '>
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
         </div>
         </div>
        <p className='text-gray-400 relative bottom-5'>16 Jan, 2024</p>

      </div>
     </div>
      </div>


      </div>




      {!showLoadMore && (
        <div className="flex justify-end  w-[80rem] mx-20 mt-4">
          <button className="text-Bluish hover:text-DarkRed px-4 py-2 rounded" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    

    <div className='bg-orange-900 w-[40rem] h-7[30rem]'></div>
  </Main>
);
};

const Main = styled.section`
.container {
  position: relative;
  max-width: 1550px;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s linear;
}

.slide.active {
  opacity: 1;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

//booking trip section
 









`;

const BookingFormContainer = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
padding: 20px;
z-index: 9999;
background-color: rgba(0, 0, 0, 0.8); /* Dark background */




`;






const BookingForm = styled.div`
/* Your booking form CSS styling */

`;


export default Book;
