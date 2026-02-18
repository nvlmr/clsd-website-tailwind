import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000 ,// time in milliseconds for each slide
        centerMode: true, // enable center mode
        centerPadding: '0px' ,// remove padding from the sides
        fade: true
    };


    
    const imgStyle = {
      width: "100%",
      height: "285px",
      objectFit: "cover",
      borderRadius: "7px",
      margin: 0
    };

    return (
      <div>
     
        <Slider {...settings}>
          <div>
            <h3>
              <img
                src="http://localhost:5001/api/collection-content/banner1.jpg"
                alt="Image 1"
                style={imgStyle}
              />
            </h3>
          </div>
          <div>
          <h3>
              <img
                src="http://localhost:5001/api/collection-content/banner2.jpg"
                alt="Image 1"
                style={imgStyle}
              />
            </h3>
          </div>
          <div>
          <h3>
              <img
                src="http://localhost:5001/api/collection-content/banner3.jpg"
                alt="Image 1"
                style={imgStyle}
              />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
