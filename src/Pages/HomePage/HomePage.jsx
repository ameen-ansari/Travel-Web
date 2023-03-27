import Header from "../../Components/Header/Header";
import SimpleSlider from "../../Components/Sliders/Slider1";
import ResSlider2 from "../../Components/Header/ResSlider";
import style from "./HomePage.module.css";
import OffersSlider from "../../Components/Offers/Slider1/OffersSlider";
import img1 from '../../Images/UNDERHEADER/1.svg'
import img2 from '../../Images/UNDERHEADER/2.svg'
import img3 from '../../Images/UNDERHEADER/3.svg'

function HomePage() {
  let imagesArray1 = [
    img1,
    img2,
    img3,
    img1,
    img2,
  ]
  return (
    <div className={style.parent}>
      <Header />
      <SimpleSlider images={imagesArray1}/>
      <div className={style.resHeader}>
        <p className="text-[24px] font-bold">Top categories</p>
        <ResSlider2 />
      </div>
      <div className={style.resHeader}>
        <p className="text-[24px] font-bold">Top Vacation Destinations</p>
        <SimpleSlider images={imagesArray1}/>
      </div>
      <OffersSlider />
      <div className={style.imageSlider}>
        <p className="text-[32px] font-bold">Browse by property type</p>
        <SimpleSlider images={imagesArray1}/>
      </div>
    </div>
  );
}

export default HomePage;
