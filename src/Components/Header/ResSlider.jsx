import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img11 from "../../Images/INHEADER/Frame 21 (1).svg";
import img12 from "../../Images/INHEADER/Frame 22 (1).svg";
import img13 from "../../Images/INHEADER/Frame 23 (1).svg";
import img14 from "../../Images/INHEADER/Frame 25 (1).svg";
import img15 from "../../Images/INHEADER/Frame 26 (1).svg";
import style from './ResSlider.module.css'
import { useNavigate } from "react-router-dom";

const SimpleSlider = () =>{
  let navigate = useNavigate()
  let pushSlash = () => {
navigate('/about') 
  }
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };

    let arrayOfImages = [
      img11,
      img12,
      img13,
      img14,
      img15,
    ]
    return (
      <div className={`${style.parent} py-10`}>
        <Slider {...settings}>
          {arrayOfImages.map((image) => {
            return (
              <div onClick={pushSlash} className={`${style.card} cursor-pointer`}>
                <img src={image}  alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
export default SimpleSlider