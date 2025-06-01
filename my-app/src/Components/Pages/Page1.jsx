import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './allPages.css';
import { Link, Outlet } from 'react-router-dom';

const Page1 = () => {
  return (      
    <div className='container-fluid'>
        <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 col-12 mt-5">
  <div className="image-container">
    <Link to="/page5" className="text-decoration-none text-dark">
      <div className="imgg">
        <img
          src="https://baroque.pk/cdn/shop/files/02_Banner229.jpg?v=1735852174& height-450"
          alt=""
          className="img-fluid"
        />
      </div>
      <div>
        <h3>30% OFF</h3>
      </div>
    </Link>
    <Link to="/page2">
      <button className="allbtn" type="button">SHOP NOW</button>
    </Link>
  </div>
</div>





<div className="col-sm-4 col-md-4 col-lg-4 col-12 mt-5">
  <div className="image-container">
    <Link to="/page5" className="text-decoration-none text-dark">
      <div className="imgg">
        <img
          src="https://baroque.pk/cdn/shop/files/02_Banner283.jpg?v=1747387737&"
          alt=""
          className="img-fluid"
        />
      </div>
      <div>
        <h3>30% OFF</h3>
      </div>
    </Link>
    <Link to="/page2">
      <button className="allbtn" type="button">SHOP NOW</button>
    </Link>
  </div>
</div>

<div className="col-sm-4 col-md-4 col-lg-4 col-12 mt-5">
  <div className="image-container">
    <Link to="/page5" className="text-decoration-none text-dark">
      <div className="imgg">
        <img
          src="https://baroque.pk/cdn/shop/files/02_Banner284.jpg?v=1747387760&"
          alt=""
          className="img-fluid"
        />
      </div>
      <div>
        <h3>30% OFF</h3>
      </div>
    </Link>
    <Link to="/page2">
      <button className="allbtn" type="button">SHOP NOW</button>
    </Link>
  </div>
</div>

        </div>
        <Outlet/>
    </div>
  )
}

export default Page1