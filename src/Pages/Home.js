import React from 'react'
import TopNavbar from '../Components/Header/TopNavbar'
import Footer from '../Components/Footer/Footer'
import HeaderSlider from '../Components/Slider.js/HeaderSlider'
import AllCategories from '../Components/Categories/AllCategories'
import LatestProduct from '../Components/Product/LatestProduct'
const Home = () => {
  return (
    <div>
      <TopNavbar />
      <HeaderSlider />
      <AllCategories />
      <LatestProduct />
      <div className='mb-5 pb-5'></div>
      <div className='mb-5 pb-5'></div>
      <Footer />
    </div>
  )
}

export default Home
