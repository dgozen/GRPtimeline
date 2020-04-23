import React from "react";
import style from "./Timeline.module.css";
import { Link } from "react-router-dom"

const Timeline = (props) => {

    return (
        <div>
            <ul className="list">
                <Link to={props.year} ><li className="listItem">{props.year}</li></Link>
            </ul>
        </div>
    )
}

export default Timeline;