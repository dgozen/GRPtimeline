import React from "react"
import arrow from "../../../assets/arrow-button.svg"
import style from "./ButtonArrowSmall.module.css"


const ButtonArrowSmall = () => {
    return (
        <button className={style.button}>
            <img className={style.arrow} src={arrow} alt="" />
        </button>
    )
}

export default ButtonArrowSmall;