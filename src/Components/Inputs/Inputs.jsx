import style from "./Inputs.module.css";
import SEARCH from "../../Images/SEARCH.svg";
import CHECKINOUT from "../../Images/CHECKINOUT.svg";
import MALE from "../../Images/MALE.svg";

function Inputs() {
  return (
    <div
      className={`${style.inputTypeParent} my-10 flex justify-between align-middle`}
    >
      <div
        className={`${style.inputType} flex justify-center align-middle flex-1`}
      >
        <div style={{ flex: 3 }} className="flex justify-start align-middle">
          <img src={SEARCH} alt="" />
          <input
            className="w-52"
            placeholder="Search destinations, hotels"
            type="text"
          />
        </div>
        <div style={{ flex: 1 }} className="flex justify-center align-middle">
          <img src={CHECKINOUT} alt="" />
          <input placeholder="Check in" type="text" />
        </div>
      </div>
      <div
        style={{ flex: 0.5 }}
        className={`${style.inputType} flex justify-center align-middle`}
      >
        <div className="flex justify-center align-middle flex-6">
          <img src={CHECKINOUT} alt="" />
          <input placeholder="Check in" type="text" />
        </div>
        <div>
          <p className="text-white opacity-70">|</p>
        </div>
        <div className="flex justify-center align-middle flex-6">
          <img src={CHECKINOUT} alt="" />
          <input placeholder="Check out" type="text" />
        </div>
        <div className="flex justify-center align-middle flex-6">
          <img src={MALE} alt="" />
          <input placeholder="1 room, 2 adults" type="text" />
        </div>
      </div>
      <div className={`${style.inputType} flex justify-center align-middle`}>
          <img src={MALE} alt="" />
          <input placeholder="1 room, 2 adults" type="text" />
        </div>
      <div style={{ flex: 0.2 }} className="flex justify-center align-middle">
        <button>Search</button>
      </div>
    </div>
  );
}

export default Inputs;
