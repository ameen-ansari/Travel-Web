import style from "./Advitisment.module.css";
import iphone from "../../Images/advitisment/iPhone 13 Mockup.svg";
import img1 from "../../Images/advitisment/image 22.svg";
import img2 from "../../Images/advitisment/image 23.svg";
import line from '../../Images/Line 3.svg'

function Advitisment() {
  return (
    <div className={style.parent}>
      <div className={style.iphoneParent}>
        <img src={iphone} alt="iphone" />
      </div>
      <div className={style.content}>
        <div>
          <p className="text-white font-bold text-[48px]" >Your all-in-one travel app.</p>
          <p className="text-white font-normal text-[24px] mt-4">
            Book flights, hotels, trains & rental cars anywhere in the world in
            just seconds. Get real-time flight updates, travel info, exclusive
            deals, and 30% more Trip Coins only on the app!
          </p>
        </div>
        <div className={style.inContentParent}>
          <div>
            <div className={style.btnsParent}>
              <button className={style.btn1}>Mobile</button>
              <button className={style.btn2}>Email</button>
            </div>
            <div>
              <p className="text-white font-normal text-[14px]">
                Enter your phone number to receive a text with a link to
                download the app.
              </p>
            </div>
            <div className={style.formType}>
              <input type="text" placeholder="+92 Mobile number" />
              <button className={style.btn3}>Search</button>
            </div>
          </div>
          <div>
            <div>
            <img src={line} alt="line" />
            </div>
            <div>
              <p className="text-white font-normal text-[16px]">or</p>
            </div>
            <div>
            <img src={line} alt="line" />
            </div>
          </div>
          <div className={style.sociallogos}>
            <img className="cursor-pointer" src={img1} alt="playS" />
            <img className="cursor-pointer" src={img2} alt="appleS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advitisment;
