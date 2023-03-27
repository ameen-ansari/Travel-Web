import Header from "../../Components/Header/Header";
import SimpleSlider from "../../Components/Sliders/Slider1";
import ResSlider2 from "../../Components/Header/ResSlider";
import style from "./HomePage.module.css";
import OffersSlider from "../../Components/Offers/Slider1/OffersSlider";
import img1 from "../../Images/UNDERHEADER/1.svg";
import img2 from "../../Images/UNDERHEADER/2.svg";
import img3 from "../../Images/UNDERHEADER/3.svg";
import Slider2img1 from "../../Images/IMAGESLIDER2/Frame 31.svg";
import Slider2img2 from "../../Images/IMAGESLIDER2/Frame 36.svg";
import Slider2img3 from "../../Images/IMAGESLIDER2/Frame 37.svg";
import ComunitySlider from '../../Components/Offers/Slider2/ComunitySlider'

function HomePage() {
  let imagesArray1 = [img1, img2, img3, img1, img2];

  let imagesArray2 = [
    Slider2img1,
    Slider2img2,
    Slider2img3,
    Slider2img1,
    Slider2img2,
  ];
  return (
    <div className={style.parent}>
      <Header />
      <SimpleSlider images={imagesArray1} />
      <div className={style.resHeader}>
        <p className="text-[24px] font-bold">Top categories</p>
        <ResSlider2 />
      </div>
      <div className={style.resHeader}>
        <p className="text-[24px] font-bold">Top Vacation Destinations</p>
        <SimpleSlider images={imagesArray1} />
      </div>
      <OffersSlider />
      <div className={style.imageSlider}>
        <p className="text-[32px] font-bold">Browse by property type</p>
        <SimpleSlider images={imagesArray2} />
      </div>
      <div className={style.BGSEC}>
        <p className="text-[56px] font-bold text-white">Plan your trip with travel expert</p>
        <p className="text-[32px] font-normal text-white">Our professional advisors can craft your perfect itinerary</p>
      </div>
      <div className={style.Slider2}>
        <p className="text-[32px] font-bold ">Connect with other travelers in our community</p>
        <ComunitySlider />
      </div>
    </div>
  );
}

export default HomePage;
