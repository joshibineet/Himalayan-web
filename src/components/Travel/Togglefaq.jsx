import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FAQToggle = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-toggle  w-[80rem] mx-20">
      <div className="question flex justify-between  items-center " onClick={toggleOpen}>
        <span>{question}</span>
        <div>
          {isOpen ? <RiArrowDropUpLine className='text-3xl' /> : <RiArrowDropDownLine className='text-3xl' />}
        </div>
      </div>
      <hr className="border-gray-200 my-2" />
      {isOpen && <div className="answer text-gray-400 mb-4">{answer}</div>}
    </div>
  );
};

const FAQList = () => {
  return (
    <div className="faq-list">
      <FAQToggle
        question="What is Lorem Ipsum?"
         answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis risus sit amet tortor pretium varius. Integer vitae libero at arcu eleifend maximus ac et velit. Fusce quis nisi vestibulum, gravida justo id, consectetur velit. Sed et accumsan ligula. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec scelerisque sapien. Aenean id ultrices elit. Quisque vel libero id velit congue rutrum. Nulla facilisi. Donec bibendum vitae lorem at commodo. Sed non mauris eu tortor suscipit scelerisque ac quis nunc. Nunc euismod nibh nec nulla euismod, nec posuere elit lobortis. Vivamus vehicula tortor sit amet justo facilisis fringilla. Ut ac lectus nec velit fringilla finibus. "
      />
      <FAQToggle
        question="Why do we use it?"
        answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis risus sit amet tortor pretium varius. Integer vitae libero at arcu eleifend maximus ac et velit. Fusce quis nisi vestibulum, gravida justo id, consectetur velit. Sed et accumsan ligula. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec scelerisque sapien. Aenean id ultrices elit. Quisque vel libero id velit congue rutrum. Nulla facilisi. Donec bibendum vitae lorem at commodo. Sed non mauris eu tortor suscipit scelerisque ac quis nunc. Nunc euismod nibh nec nulla euismod, nec posuere elit lobortis. Vivamus vehicula tortor sit amet justo facilisis fringilla. Ut ac lectus nec velit fringilla finibus. "
      />
      
      <FAQToggle
        question="What is Lorem Ipsum?"
        
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis risus sit amet tortor pretium varius. Integer vitae libero at arcu eleifend maximus ac et velit. Fusce quis nisi vestibulum, gravida justo id, consectetur velit. Sed et accumsan ligula. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec scelerisque sapien. Aenean id ultrices elit. Quisque vel libero id velit congue rutrum. Nulla facilisi. Donec bibendum vitae lorem at commodo. Sed non mauris eu tortor suscipit scelerisque ac quis nunc. Nunc euismod nibh nec nulla euismod, nec posuere elit lobortis. Vivamus vehicula tortor sit amet justo facilisis fringilla. Ut ac lectus nec velit fringilla finibus. "
      />
      <FAQToggle
        question="Why do we use it?"
        answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis risus sit amet tortor pretium varius. Integer vitae libero at arcu eleifend maximus ac et velit. Fusce quis nisi vestibulum, gravida justo id, consectetur velit. Sed et accumsan ligula. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec scelerisque sapien. Aenean id ultrices elit. Quisque vel libero id velit congue rutrum. Nulla facilisi. Donec bibendum vitae lorem at commodo. Sed non mauris eu tortor suscipit scelerisque ac quis nunc. Nunc euismod nibh nec nulla euismod, nec posuere elit lobortis. Vivamus vehicula tortor sit amet justo facilisis fringilla. Ut ac lectus nec velit fringilla finibus. "
      />

<FAQToggle
        question="What is Lorem Ipsum?"
        
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis risus sit amet tortor pretium varius. Integer vitae libero at arcu eleifend maximus ac et velit. Fusce quis nisi vestibulum, gravida justo id, consectetur velit. Sed et accumsan ligula. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec scelerisque sapien. Aenean id ultrices elit. Quisque vel libero id velit congue rutrum. Nulla facilisi. Donec bibendum vitae lorem at commodo. Sed non mauris eu tortor suscipit scelerisque ac quis nunc. Nunc euismod nibh nec nulla euismod, nec posuere elit lobortis. Vivamus vehicula tortor sit amet justo facilisis fringilla. Ut ac lectus nec velit fringilla finibus. "
      />
      <FAQToggle
        question="Why do we use it?"
        answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis risus sit amet tortor pretium varius. Integer vitae libero at arcu eleifend maximus ac et velit. Fusce quis nisi vestibulum, gravida justo id, consectetur velit. Sed et accumsan ligula. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec scelerisque sapien. Aenean id ultrices elit. Quisque vel libero id velit congue rutrum. Nulla facilisi. Donec bibendum vitae lorem at commodo. Sed non mauris eu tortor suscipit scelerisque ac quis nunc. Nunc euismod nibh nec nulla euismod, nec posuere elit lobortis. Vivamus vehicula tortor sit amet justo facilisis fringilla. Ut ac lectus nec velit fringilla finibus. "
      />


    </div>
  );
};

const App = () => {
  return (
    <div className="app  my-16  ml-5">
      <h1 className=' flex text-2xl font-bold justify-center'>FAQ'S</h1>
      <FAQList className="" />
     
    </div>
  );
};

export default App;
