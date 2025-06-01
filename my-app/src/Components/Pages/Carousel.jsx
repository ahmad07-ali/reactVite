import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
  return (
    <div className="container text-center mt-4">
      <div id="simpleCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row caroRow">
              <div className="col-6 text-center">
                <div>
                <img
                  src="https://baroque.pk/cdn/shop/files/Shop_The_Look104.jpg?v=1747388296&width=1000"
                  className="d-block w-100"
                  alt="Imag 1"
                  style={{ height: "600px", objectFit: "contain" }}
                  
                />
                <p>New Brand</p>
              </div>
              </div>
              <div className="col-4 text-center">
                <img
                  src="https://baroque.pk/cdn/shop/files/64_a4a8f061-9f46-4e78-9514-75dd4c40be3a.jpg?v=1747132686&width=300"
                  className="d-block w-100"
                  alt="Imag 2"
                  style={{ height: "500px", objectFit: "contain" }}
                />
                
                <p>EMBROIDERED PRINTED LAWN</p>
                <p>UF-4103</p>
                <p>Sale pricePKR 10,950.00</p>
                <br />
                
               
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-6 ">
                <img
                  src="https://baroque.pk/cdn/shop/files/137_1da98310-c5eb-4548-a423-c2ae114735ed.jpg?v=1732188913&width=400"
                  className="d-block w-100"
                  alt="Imag 3"
                  style={{ height: "600px", objectFit: "contain" }}
                />
              </div>
              <div className="col-4 text-center">
                <img
                  src="https://baroque.pk/cdn/shop/files/Shop_The_Look92.jpg?v=1738051812&width=650"
                  className="d-block w-100"
                  alt="Imag 4"
                  style={{ height: "500px", objectFit: "contain" }}
                />
                <p>EMBROIDERED PRINTED LAWN</p>
                <p>UF-4103</p>
                <p>Sale pricePKR 10,950.00</p>
                <br />
              </div>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#simpleCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#simpleCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
