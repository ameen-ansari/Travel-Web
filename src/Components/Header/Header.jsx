import Navbar from "../Navbar/Navbar";
import style from "./Header.module.css";
import Inputs from "../Inputs/Inputs";
import SimpleSlider from "./ImageSlider";
import shadow from '../../Images/Frame 53.svg'

function Header(props) {
  return (
    <div className={style.parent}>
      <Navbar />
      <div className={style.Header}>
        <p className="font-bold text-[72px] text-white">
          The whole world awaits.
        </p>
        <Inputs />
        <p className="font-bold text-[32px] text-white">Top categories</p>
      </div>
      <SimpleSlider />
      <p style={{width:'82%' , margin:'auto'}} className="pb-4 font-bold text-[32px] text-white">
        {props.para}
      </p>
      <img className={style.shadow} src={shadow} alt="whiteShadow" />
    </div>
  );
}

export default Header;
