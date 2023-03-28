import style from "./OffersSlider.module.css";
import img1 from "../../../Images/OFFERS/image 19.svg";
import img2 from "../../../Images/OFFERS/image 19 (1).svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OffersSlider() {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },]
    }
  return (
    <div className={`${style.parent}`}>
        <p className="font-bold text-[32px] ">Offers</p>
      <Slider {...settings}>
        <div className={`${style.card}`}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="offersDesc">
            <p className="font-normal text-[16px] opacity-50">Domestic Flights</p>
            <p className="font-medium text-[24px]">Huge savings on flight with trxvl.</p>
            <p className="font-normal text-[16px] opacity-50">Book domestic flights starting @ just ₹1459</p>
            <button className={style.btn}>Book Now</button>
          </div>
        </div>
        <div className={`${style.card}`}>
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="offersDesc">
            <p className="font-normal text-[16px] opacity-50">International Hotels</p>
            <p className="font-medium text-[24px] ">Enjoy upto 20% off on International Hotels</p>
            <p className="font-normal text-[16px] opacity-50">Make the most of  this deal on your first booking with trxvl.</p>
            <button className={style.btn}>Book Now</button>
          </div>
        </div>
        <div className={`${style.card}`}>
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="offersDesc">
            <p className="font-normal text-[16px] opacity-50">International Hotels</p>
            <p className="font-medium text-[24px]">Enjoy upto 20% off on International Hotels</p>
            <p className="font-normal text-[16px] opacity-50">Make the most of  this deal on your first booking with trxvl.</p>
            <button className={style.btn}>Book Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OffersSlider;
