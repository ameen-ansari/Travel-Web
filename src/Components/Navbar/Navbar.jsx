import style from "./Navbar.module.css";
import HAM_BURGER from '../../Images/HAM_BURGER.svg'

function Navbar() {
  return (
    <div className={style.parent}>
      <div>
        <p className="text-white text-[32px] font-bold">trxvl.</p>
      </div>
      <div>
        <p className="text-white text-[16px] font-normal cursor-pointer opacity-70">Home</p>
        <p className="text-white text-[16px] font-normal cursor-pointer opacity-70">Stays</p>
        <p className="text-white text-[16px] font-normal cursor-pointer opacity-70">Flights</p>
        <p className="text-white text-[16px] font-normal cursor-pointer opacity-70">Packages</p>
        <p className="text-white text-[16px] font-bold cursor-pointer opacity-70">Sign Up</p>
      </div>
      <div className="hidden justify-center  align-middle"> 
        <img className="cursor-pointer" src={HAM_BURGER} alt="MENU_OPENER" />
      </div>
    </div>
  );
}

export default Navbar;
