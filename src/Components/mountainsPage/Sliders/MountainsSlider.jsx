import style from "./MountainsSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardImg1 from "../../../Images/mountainsPage/cardsInnerImages/Frame 45.svg";
import cardImg2 from "../../../Images/mountainsPage/cardsInnerImages/Frame 46.svg";
import cardImg3 from "../../../Images/mountainsPage/cardsInnerImages/Frame 47.svg";
import cardImg4 from "../../../Images/mountainsPage/cardsInnerImages/Frame 48.svg";
import star from "../../../Images/mountainsPage/cardsInnerImages/Vector (6).svg";

function MountainsSlider(props) {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
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
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ]
  };
  return (
    <div className={style.parent}>
      <Slider {...settings}>
      {props.array.map((obj) => {
        return (
            <div className={style.card}>
              <div>
                <img src={obj.img} alt="" />
              </div>
              <div className={style.content}>
                <div className="flex justify-between align-middle gap-10">
                  <p className="font-normal text-[24px]">{obj.desc}</p>
                  <div className="flex justify-center align-middle gap-5">
                    <img src={star} alt="star" />
                    <p className="font-normal text-[24px]">4.7</p>
                  </div>
                </div>
                <div>
                  <p className="font-normal text-[16px] opacity-50">
                    3Days 4Nights
                  </p>
                  <div className="flex justify-between align-middle flex-wrap">
                    <img className="p-2" src={cardImg2} alt="Earoplane" />
                    <img className="p-2" src={cardImg3} alt="Hotel" />
                    <img className="p-2" src={cardImg4} alt="Car" />
                    <img className="p-2" src={cardImg1} alt="Person" />
                  </div>
                  <div>
                    <ul>
                      <li className="font-normal text-[16px] opacity-50">
                        Tour combo with return airport transfer
                      </li>
                      <li className="font-normal text-[16px] opacity-50">
                        City Tour
                      </li>
                      <li className="font-normal text-[16px] opacity-50">
                        Curious Corner
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-start align-middle gap-8">
                    <del className="font-normal text-[16px] text-#000000">
                      ₹88,952
                    </del>
                    <div className="flex justify-between align-middle">
                      <span className="font-bold text-[24px]">₹88,952</span>
                      <span
                        style={{ alignSelf: "flex-end" }}
                        className="font-thin text-[12px] opacity-50"
                      >
                        Per person
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
      </Slider>
    </div>
  );
}

export default MountainsSlider;
