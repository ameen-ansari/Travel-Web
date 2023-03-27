import style from "./comunitySlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../Images/Slider/Frame 31 (1).svg'
import img2 from '../../../Images/Slider/Frame 31 (2).svg'
import img3 from '../../../Images/Slider/Frame 31 (3).svg'

function comunitySlider() {
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
        <div className={`${style.card}`}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="offersDesc">
            <p className="font-normal text-[16px] opacity-50">India</p>
            <p className="font-medium text-[24px]">Travel community</p>
            <p className="font-normal text-[16px] opacity-50">
              155,073 travelers
            </p>
          </div>
        </div>
        <div className={`${style.card}`}>
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="offersDesc">
            <p className="font-normal text-[16px] opacity-50">Travel Talk</p>
            <p className="font-medium text-[24px] ">Travel community</p>
            <p className="font-normal text-[16px] opacity-50">
              155,073 travelers
            </p>
          </div>
        </div>
        <div className={`${style.card}`}>
          <div>
            <img src={img3} alt="" />
          </div>
          <div className="offersDesc">
            <p className="font-normal text-[16px] opacity-50">Beach</p>
            <p className="font-medium text-[24px]">Travel community</p>
            <p className="font-normal text-[16px] opacity-50">
              155,073 travelers
            </p>
          </div>
        </div>
        <div className={`${style.card}`}>
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="offersDesc">
            <p className="font-normal text-[16px] opacity-50">Mountains</p>
            <p className="font-medium text-[24px]">Travel community</p>
            <p className="font-normal text-[16px] opacity-50">
              155,073 travelers
            </p>
          </div>
        </div>
        <div className={`${style.card}`}>
          <div>
            <img src={img3} alt="" />
          </div>
          <div className="offersDesc">
            <p className="font-normal text-[16px] opacity-50">Mountains</p>
            <p className="font-medium text-[24px]">Travel community</p>
            <p className="font-normal text-[16px] opacity-50">
              155,073 travelers
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default comunitySlider;
