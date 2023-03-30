import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider1.module.css";

const SliderCompo = (props) => {
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
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      }
    ],
  };
  return (
    <div className={style.parent}>
      <Slider {...settings}>
        {props.images?.map((image, i) => {
          return (
            <div key={i} className="px-2 cursor-pointer">
              <img style={{ height: 200, width: 310 }} src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderCompo;
