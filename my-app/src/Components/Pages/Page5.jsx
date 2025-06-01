import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page5 = () => {
  const filterData = [
    {
      label: 'Category',
      options: ['PKR 1990/- Only (8)', 'Tops (7)', 'Formal Kurti (14)']
    },
    {
      label: 'Styling',
      options: ['Embroidered 98item', 'Printed 91item', 'Digital Printed 12item']
    },
    {
      label: 'Wear Type',
      options: ['Regular (21)', 'Classic (38)', 'Loose (15)']
    },
    {
      label: 'Color Family',
      options: ['Red', 'Blue', 'Black']
    },
    {
      label: 'Season',
      options: [
        'Festive collection (88)',
        'Independence day collection (3)',
        'Limited Edition (6)',
        'Midsummer collection (19)'
      ]
    },
    {
      label: 'Product Category',
      options: ['Ladies Kurti (275)', 'Ladies Top (7)']
    },
    {
      label: 'Size',
      options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      label: 'Fabric',
      options: ['Cotton', 'Lawn', 'Silk', 'Chiffon', 'Cambric']
    }
  ];

  const images = [
    'https://baroque.pk/cdn/shop/files/02_Banner229.jpg',
    'https://baroque.pk/cdn/shop/files/02_Banner283.jpg',
    'https://baroque.pk/cdn/shop/files/02_Banner284.jpg',
    'https://baroque.pk/cdn/shop/files/02_Banner289.jpg',
    'https://baroque.pk/cdn/shop/files/02_Banner288.jpg',
    'https://baroque.pk/cdn/shop/files/02_Banner287.jpg',
    'https://baroque.pk/cdn/shop/products/10_16.jpg',
    'https://baroque.pk/cdn/shop/files/10_24.jpg',
    'https://baroque.pk/cdn/shop/files/68_40e8d603-f3d5-4cfd-95c5-676051a582a3.jpg',
    'https://baroque.pk/cdn/shop/files/08_90e886be-d5dc-44b8-bbed-3dbc8bbc291c.jpg?v=1748352445&width=600',
    'https://baroque.pk/cdn/shop/files/22_f4921463-674c-4a63-83db-913573e6a0e0.jpg?v=1748352556&width=600',
    'https://baroque.pk/cdn/shop/files/44_4aaee38d-5746-47ab-9834-0cf5a3c8e72b.jpg?v=1748074062&width=600'

  ];
if (!filterData.length===0) {

return(
  <div className=" flex flex-col justify-center items-center   ">
  <img
    src="Animation.gif"
    className="h-[20vh] m-auto "
    alt={"your animation isn't applied"}
  />
  <h4 className="text-center"> Loading Data</h4>
</div>

)
}
  return (
    <div className="container-fluid mt-3">
      {/* Mobile Filter Button */}
      <div className="d-md-none text-end mb-3">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-controls="offcanvasResponsive"
        >
          SHOP NOW
        </button>
      </div>

      {/* Offcanvas for Mobile Filters */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">SHOP BY</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          {filterData.map((filter, idx) => (
            <div className="mb-3" key={idx}>
              <label className="form-label fw-bold">{filter.label}</label>
              <select className="form-select">
                <option disabled selected>{`Select ${filter.label}`}</option>
                {filter.options.map((option, i) => (
                  <option key={i}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="row">
        {/* Desktop Filter Panel */}
        <div className="col-md-3 d-none d-md-block">
          <div style={{ position: 'sticky', top: '20px' }}>
            {filterData.map((filter, idx) => (
              <div className="mb-3" key={idx}>
                <label className="form-label fw-bold">{filter.label}</label>
                <select className="form-select">
                  <option disabled selected>{`Select ${filter.label}`}</option>
                  {filter.options.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Product Images - 2 per row */}
        <div className="col-md-9">
          <div className="row">
            {images.map((src, idx) => (
              <div className="col-sm-6 col-lg-6 mb-4" key={idx}>
                <div className="border p-2 text-center">
                  <img src={src} alt={`Product ${idx + 1}`} className="img-fluid" />
                  <h6 className="mt-2">30% OFF</h6>
                  <Link to="/page2">
                    <button className="btn btn-dark">SHOP NOW</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
