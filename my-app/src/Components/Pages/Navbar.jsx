import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Outlet } from "react-router-dom";
import './allPages.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={faUser} />;
const Navbar = () => {
  return (
    <>
      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel"><p></p></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p className="spec">SPECTIAL PRICES</p>
          <hr />
            
            <div className="">
            
            
            <Link to="/crud">
            <button className="sideps ">Student Crud</button>
            </Link>
            </div>
            <hr />
          <div className="side">
            <p className="sidep">EID LAWN</p>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <hr />
          <div className="side">
            <p className="sidep">UNSTITCHED</p>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <hr />
          <div className="side">
            <p className="sidep">STITCHED</p>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <hr />
          <div className="side">
            <p className="sidep">READY TO WEAR</p>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <hr />
          <div className="side">
            <p className="sidep">ESSENTIALS</p>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <hr />
          <div className="side">
            <p className="sidep">CHANTELLE</p>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <hr />
          <div className="sideicon">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-square-snapchat"></i>
          <i className="fa-brands fa-whatsapp"></i>
          </div>
          <hr />
          <div className="side">
            <select name="" id="">
              <option value="PAKISTAN">PAKISTAN</option>
            </select>
          </div>
          <div className="side"></div>
          <ul>
            <li><Link to="#" className="text-decoration-none">Home</Link></li>
            <li><Link to="#" className="text-decoration-none">About</Link></li>
            <li><Link to="#" className="text-decoration-none">Contact</Link></li>
            </ul>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-light bg-light px-3 navs">
        <div className="d-flex align-items-center">
          {/* Offcanvas toggle button */}
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Brand Name */}
        <div className="mx-auto">
          <span className="navbar-brand mb-0 h1">BAROQUE</span>
        </div>

        {/* Right Icon */}
        <div className="navicon">
          <select name="PAKISTAN" id="">
            <option value="Pak">PAKISTAN</option>
          </select>
          <Link to="/userlogin">
          <i className="fa-regular fa-user"></i> 
          </Link>
          <Link to="/search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link to="/cart">
          <i className="fa-solid fa-bag-shopping"></i>
          </Link>
        </div>
        <Outlet />
      </nav>
    </>
  );
};

export default Navbar;
