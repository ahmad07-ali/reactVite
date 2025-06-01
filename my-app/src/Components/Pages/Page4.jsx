import React from "react";
import "./allPages.css";
const Page4 = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row one">
          <div className="col-sm-3 col-md-3 col-lg-3 col-12 content">
            <i className="fa-regular fa-clock"></i>
            <p className="txts">PRIORITY STICHING</p>
            <p>
              Receive your stitched orders more quickly in a timeline of 2 weeks
            </p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-12 content">
            <i className="fa-solid fa-microscope"></i>
            <p className="txts">CUSTOM SIZE</p>
            <p>
              Get your outfit tailored to perfection as per your desired
              measurements
            </p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-12 content">
            <i className="fa-regular fa-paste"></i>
            <p className="txts">FREE SHIPPING</p>
            <p>
              We provide free shipping all across Pakistan on all of our orders
            </p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-12 content">
            <i className="fa-regular fa-circle-user"></i>
            <p className="txts">ORDER EXCHANGE</p>
            <p>
              ORDER EXCHANGE For a hassle free exchange service, fill out the
              exchange form
            </p>
          </div>
        </div>
        <hr />
        <div className="row two">
          <div className="col-sm-4 col-md-4 col-lg-4 col-12 pt= 5 width=300">
            <ul>
              <p className="txtt">ABOUT</p>
              <li>Who We Are</li>
              <li>Our Responsibility</li>
              <li>Service We Provide</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>
                Store: Shop no. F-06, First floor, Dolmen mall, Sector A DHA
                Phase 6, Lahore, Punjab, Pakistan
              </li>
            </ul>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4 col-12 pt= 5 width=300">
            <ul>
              <p className="txtt">Customer Service</p>
              <li>Who We Are</li>
              <li>Our Responsibility</li>
              <li>Service We Provide</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>
                Store: Shop no. F-06, First floor, Dolmen mall, Sector A DHA
                Phase 6, Lahore, Punjab, Pakistan
              </li>
            </ul>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4 col-12 pt= 5 width=300">
            <ul>
              <p className="txtt">Policies</p>
              <li>Who We Are</li>
              <li>Our Responsibility</li>
              <li>Service We Provide</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>
                Store: Shop no. F-06, First floor, Dolmen mall, Sector A DHA
                Phase 6, Lahore, Punjab, Pakistan
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-12 three">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-square-snapchat"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <div className="row four">
          <div className="col-sm-4 col-md-4 col-lg-4 col-12">
            <select name="" id="">
              <option value="">PAKISTAN</option>
            </select>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-12 info">
            {/* <div className='info'> */}
            <i className="fa-regular fa-copyright"></i>
            <p>2025 - BAROQUE</p>
            {/* </div> */}
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-12">
            <div className="visa">
              <i id="ic" className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-visa"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
