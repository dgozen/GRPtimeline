import React from "react";
import style from "./Timeline.module.css";
import { Link } from "react-router-dom"

const Timeline = (props) => {

    return (
                <Link to={props.year} className={style.listItem}><p>{props.year}</p></Link>
    )
}

export default Timeline;