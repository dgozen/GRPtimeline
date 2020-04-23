import React from "react";
import style from "./Timeline.module.css";
import { Link } from "react-router-dom"

const Timeline = (props) => {

    return (
        <div>
            <Link to={props.year} className={style.link}><p>{props.year}</p></Link>
        </div>
    )
}

export default Timeline;