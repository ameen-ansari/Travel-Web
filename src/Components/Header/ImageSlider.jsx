import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Images/INHEADER/Frame1.svg";
import img2 from "../../Images/INHEADER/Frame2.svg";
import img3 from "../../Images/INHEADER/Frame3.svg";
import img4 from "../../Images/INHEADER/Frame4.svg";
import img5 from "../../Images/INHEADER/Frame5.svg";
import img6 from "../../Images/INHEADER/Frame6.svg";
import img7 from "../../Images/INHEADER/Frame7.svg";
import img8 from "../../Images/INHEADER/Frame8.svg";
import img9 from "../../Images/INHEADER/Frame9.svg";
import img10 from "../../Images/INHEADER/Frame10.svg";
import style from './ImageSlider.module.css'
import { useNavigate } from "react-router-dom";

 const SimpleSlider = ()=> {
  let navigate = useNavigate()
  let pushAbout = () => {
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
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img1,
    ]
    return (
      <div className={`${style.parent} py-10`}>
        <Slider {...settings}>
          {arrayOfImages.map((image) => {
            return (
              <div onClick={pushAbout} className={`${style.card} cursor-pointer`}>
                <img src={image}  alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
export default SimpleSlider