import React from "react";
import { useState } from "react";
import Year from "./Year/Year";
import style from "./Timeline.module.css";
import ButtonArrowSmall from "../Buttons/ButtonArrowSmall/ButtonArrowSmall";

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

const numbers = [
	1.1,
	[1.5, 1.5],
	2.2,
	[2.5, 2.5],
	3.3,
	[3.5, 3.5],
	4.4,
	[4.5,4.5]
]

const Timeline = () => {
	const [state, setState] = useState(0);

	const toggle = () => {
		setState((state + 1) % numbers.length);
		console.log("hello")
	}

	const someVariable = numbers[state]; 
	console.log(state)

    return (
		<div>
		<div className={style.background} style={{ transform: `scale(${someVariable})` }}></div>
        <div className={style.container} >
            <div className={style.list}>
				<div className={style.buttonArrowUp}>
					<ButtonArrowSmall />
				</div>
				{timelineData.map(item => (
					<button onClick={toggle}><Year year={item} /></button>
				))}
				<div className={style.buttonArrowDown}>
					<ButtonArrowSmall />
				</div>
            </div>
        </div>
		
		</div>
    )
}

export default Timeline;