import Header from "../../Components/Header/Header";
import SimpleSlider from "../../Components/Sliders/Slider1";
import SimpleSlider2 from "../../Components/Header/ImageSlider";
import ResSlider2 from "../../Components/Header/ResSlider";
import style from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={style.parent}>
      <Header />
      <SimpleSlider />
      <div className={style.resHeader}>
        <p className="text-[24px] font-bold">Top categories</p>
        <ResSlider2 />
      </div>
      <div className={style.resHeader}>
        <p className="text-[24px] font-bold">Top Vacation Destinations</p>
        <SimpleSlider />
      </div>
    </div>
  );
}

export default HomePage;
