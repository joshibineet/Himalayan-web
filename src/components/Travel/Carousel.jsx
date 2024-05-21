import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../../assets/Travel1.png'
import Img2 from '../../assets/Travel2.png'
import Img3 from '../../assets/bannerimg2.png'

const Carousel = () => {
  return (
    <CCarousel controls transition="crossfade" className='h-full w-full object-cover px-24' interval={3000} >
      <CCarouselItem className='h-[500px] object-contain flex'>
        <CImage className="d-block w-full h-full object-cover  " src={Img3} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem className='h-[500px] object-contain flex'>
        <CImage className="d-block w-full h-full object-cover   " src={Img1} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem className='h-[500px] object-cover flex'>
        <CImage className="d-block w-full h-full object-cover  " src={Img2} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
}

export default Carousel;
