import React from 'react'
import './Page.css'
import Carousel from '../Pages/Carousel'
import Page1 from '../Pages/Page1'
import Page3 from '../Pages/Page3'



function Main() {
  return (
    <>
    <div className='container-fluid main'>
        <div className='col-md-12 col-lg-12 col-lg-12 col-xl-12 imgss twobtn'>
        <img src="https://baroque.pk/cdn/shop/files/MAin_BAnner93.jpg?v=1738051250&width=2000" mt="10px" width="100%" className='img-fluid' alt="" />
                <a href='/' className='btn1 btttn' type='button'>SHOP NOW</a>
        </div>
        
    </div>
       <Page1 />
       <Carousel />
       <Page3 />
    </>
  )
}

export default Main;