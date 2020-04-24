import React from "react";
import style from "./InformationBoxLayout.module.css";
import InformationBox from "../../component/InformationBox/InformationBox";
import arrowButton from "../../assets/arrow-button.svg";

const InformationBoxLayout = (props) => {
  return (
    <div className={style.infoBoxLayoutStyle}>
      <img src={arrowButton} alt="arrow-button" className={style.leftArrow} />
      <div className={style.box1}>
        <InformationBox title="Test 1" text="Some text here" />
      </div>
      <div className={style.box2}>
        <InformationBox title="Test 2" text="Some text here" />
      </div>
      <div className={style.box3}>
        <InformationBox title="Test 3" text="Some text here" />
      </div>
      <div className={style.box4}>
        <InformationBox title="Test 4" text="Some text here" />
      </div>
      <div className={style.box5}>
        <InformationBox title="Test 5" text="Some text here" />
      </div>
      <div className={style.box6}>
        <InformationBox title="Test 6" text="Some text here" />
      </div>
	  <img src={arrowButton} alt="arrow-button" className={style.rightArrow} />
    </div>
  );
};

export default InformationBoxLayout;
