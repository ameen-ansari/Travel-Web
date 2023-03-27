import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../Images/UNDERHEADER/1.svg'
import img2 from '../../Images/UNDERHEADER/2.svg'
import img3 from '../../Images/UNDERHEADER/3.svg'
import style from './Slider1.module.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        }
        ]

    };

    let arrayOfImages = [
        img1,
        img2,
        img3,
        img1,
        img2,
      ];

    return (
      <div className={style.parent}>
        <Slider {...settings}>
        {arrayOfImages.map((image) => {
            return (
              <div className="px-2 cursor-pointer" >
                <img style={{height:200 , width:310}}  src={image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
