import React from 'react'
import './allPages.css'
const Page3 = () => {
  return (
    <div className="container all">
      <div className="row">
        <h2 className='txts'>BE INSPIRED</h2>
        <div className="col-sm-4 col-md-4 col-lg-4 col-12">
          <video
            src="https://baroque.pk/cdn/shop/videos/c/vp/6ddb5d3f96a642bca901f10de28467a4/6ddb5d3f96a642bca901f10de28467a4.HD-720p-2.1Mbps-46806847.mp4?v=0"
            autoPlay
            loop
            muted
            playsInline
            className="w-100"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4 col-12">
          <video
            src="https://baroque.pk/cdn/shop/videos/c/vp/a0a708548b7f4ede882d25bdeea9d6a0/a0a708548b7f4ede882d25bdeea9d6a0.HD-1080p-7.2Mbps-46806773.mp4?v=0"
            autoPlay
            loop
            muted
            playsInline
            className="w-100"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4 col-12">
          <video
            src="https://baroque.pk/cdn/shop/videos/c/vp/11900b6a94624114b2528610d84c51b1/11900b6a94624114b2528610d84c51b1.HD-1080p-3.3Mbps-46806725.mp4?v=0"
            autoPlay
            loop
            muted
            playsInline
            className="w-100 h-70"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
    
  );
};

export default Page3;
