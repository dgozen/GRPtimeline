import React from "react";
import style from "./Year.module.css";
import { Link } from "react-router-dom"

const Year = (props) => {

    return (
        <div>
            <Link to={props.year} className={style.link}><p>{props.year}</p></Link>
        </div>
    )
}

export default Year;