"use client"
import React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';

const Fade = () => {
  const router = useRouter();
  const title = 'Our Team';
  const subtitle = '';
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>{title}</h2>
      <Slider {...settings}>
        <div>
          <img src="kiwi.jpeg" />
        </div>
        <div>
          <img src="pineapple.jpeg" />
        </div>
        <div>
          <img src="apple.jpeg" />
        </div>
      </Slider>
    </div>
  );
};

const YourPage = () => {
  return (
    <div>
      <h1>Welcome to Your Page</h1>
      <p>This is some additional content on your page.</p>
      {/* Other components or content  */}
      <Fade />
    </div>
  );
};

export default YourPage;
