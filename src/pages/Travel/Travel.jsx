import React from 'react'
import Footer from '../../components/Footer'
import Banner from '../../components/Travel/Banner'
import Explore from './../Travel/Explore';
import Carousel from '../../components/Travel/Carousel';
import Recomended from '../../components/Travel/Recomended';
import Book from '../../components/Travel/Book';
import Togglefaq from '../../components/Travel/Togglefaq';
import Blog from '../../components/Travel/Blog';

const Travel = () => {
  return (
    <div>
  <Banner />  
  <Explore />
  <Carousel />
  <Blog />
  <Recomended />
<Book />
<Togglefaq />
      <Footer />
    </div>
  )
}

export default Travel
