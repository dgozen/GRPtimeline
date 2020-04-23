import React from "react"
import Timeline from "../../Timeline/Timeline"
import style from "./DefaultLayout.module.css"


const timelineData = [
	"1950",
	"1951",
	"1952",
	"1953",
	"1954",
	"1955",
	"1956",
	"1957",
	"1958",
	"1959",
	"1960",
	"1961",
]


const DefaultLayout = () => {
    return (
        <div className={style.list}>
            {timelineData.map(item => (
            <Timeline year={item} />
            ))}
        </div>
        
    )
}

export default DefaultLayout;