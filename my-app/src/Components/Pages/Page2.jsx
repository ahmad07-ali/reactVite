import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="page2">
        {/* Scrollable container with fixed height */}
        <div
          className="row"
          style={{
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
            paddingRight: "15px",
          }}
        >
          {/* Left images */}
          <div
            className="col-sm-6 col-md-6 col-lg-6 col-12 flex flex-col gap-4"
            style={{ paddingRight: "15px" }}
          >
            <img
              src="https://baroque.pk/cdn/shop/files/1_119.jpg?v=1744614868&"
              alt=""
              className="img-fluid"
            />
            <img
              src="https://baroque.pk/cdn/shop/files/09_98bc0483-e7ec-4725-b49a-268a2342a354_1.webp?v=1744615842&width=800"
              alt=""
              className="img-fluid"
            />
            <img
              src="https://baroque.pk/cdn/shop/files/2_126.jpg?v=1744615842&width=800"
              alt=""
              className="img-fluid"
            />
            <img
              src="https://baroque.pk/cdn/shop/files/3_120.jpg?v=1744615842&width=800"
              alt=""
              className="img-fluid"
            />
            <img
              src="https://baroque.pk/cdn/shop/files/4_107.jpg?v=1744615842&width=800"
              alt=""
              className="img-fluid"
            />
          </div>

          {/* Right sticky info box */}
          <div className="col-sm-6 col-md-6 col-lg-6 col-12">
            <div
              style={{
                position: "sticky",
                top: "10px",
                alignSelf: "flex-start",
              }}
            >
              <div className="paras">
                <p>EMBROIDERED CHIFFON PR-1057</p>
                <p>PKR 22,900.00</p>
                <p>SKU: BQU-PR-1057-01</p>
                <p>3 PIECE</p>
                <hr />
                <p>SIZE:</p>
              </div>

              <div className="boxes">
                <div className="box">XS</div>
                <div className="box">S</div>
                <div className="box">M</div>
                <div className="box">L</div>
              </div>

              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                ADD TO CART
              </button>

              <hr />

              <div className="main">
                <div className="info">
                  <i className="fa-regular fa-bookmark"></i>
                  <p>Description</p>
                </div>
                <i className="fa-solid fa-plus"></i>
              </div>

              <div className="main">
                <div className="info">
                  <i className="fa-regular fa-object-group"></i>
                  <p>Product Details</p>
                </div>
                <i className="fa-solid fa-plus"></i>
              </div>

              <div className="main">
                <div className="info">
                  <i className="fa-regular fa-paper-plane"></i>
                  <p>Delivery</p>
                </div>
                <i className="fa-solid fa-plus"></i>
              </div>

              <div className="main">
                <div className="info">
                  <i className="fa-solid fa-rotate-right"></i>
                  <p>Returns and Exchange</p>
                </div>
                <i className="fa-solid fa-plus"></i>
              </div>

              <div className="main">
                <div className="info">
                  <i className="fa-regular fa-lemon"></i>
                  <p>Care Instructions</p>
                </div>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <h5 className="mt-5">RELATED PRODUCTS</h5>
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3 col-12">
            <img
              src="https://baroque.pk/cdn/shop/files/03_2f397649-6569-415f-8078-7e73fd3a02da.jpg?v=1745320489&width=500"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-12">
            <img
              src="https://baroque.pk/cdn/shop/files/37_27422187-6d6b-43ba-b4fa-2aa44b3b48b0.jpg?v=1745392480&width=500"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-12">
            <img
              src="https://baroque.pk/cdn/shop/files/9_22.jpg?v=1744615639&width=500"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-12">
            <img
              src="https://baroque.pk/cdn/shop/files/38_b25015f3-d541-4b28-b709-cc152e43903e.jpg?v=1745321098&width=500"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Cart</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>You are eligible for free shipping</p>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4 col-12">
                <img
                  src="https://baroque.pk/cdn/shop/files/1_119.jpg?v=1744614868&width=200 height=200"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-sm-8 col-md-8 col-lg-8 col-12">
                <div className="flex flex-col items-start">
                  <p>PRET</p>
                  <p>EMBROIDERED PRINTED</p>
                  <p>LAWN PER-1100</p>
                  <p>PKR 14950.00</p>
                  <p>XS</p>

                  <div className="w-50 flex justify-evenly items-baseline border">
                    <i className="fa-solid fa-minus"></i>
                    <p>1</p>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <p>Remove</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Taxes and shipping calculated at checkout</p>
            <button
              className="btn btn-primary"
              data-bs-dismiss="offcanvas"
              onClick={() => setTimeout(() => navigate("/orderform"), 300)}
            >
              CHECKOUT. PKR 00
            </button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Page2;
