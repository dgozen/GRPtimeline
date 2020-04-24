import React from "react"
import Timeline from "../../Timeline/Timeline"
import style from "./DefaultLayout.module.css"
import ButtonArrowSmall from "../../Buttons/ButtonArrowSmall/ButtonArrowSmall"

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
        <div className={style.container}>
            <div className={style.list}>
				<div className={style.buttonArrowUp}>
					<ButtonArrowSmall />
				</div>
				{timelineData.map(item => (
					<Timeline year={item} />
				))}
				<div className={style.buttonArrowDown}>
					<ButtonArrowSmall />
				</div>
            </div>
        </div>
    )
}

export default DefaultLayout;