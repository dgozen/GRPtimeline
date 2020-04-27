import React from "react";
import { useState } from "react";
import style from "./DefaultLayout.module.css";
import Header from "../../Header/Header"
import ButtonArrowSmall from "../../Buttons/ButtonArrowSmall/ButtonArrowSmall";
import Year from "../../Year/Year";
import Filter from "../../Filter/Filter"


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
]

const numbers = [
	1,
	1.5,
	2,
	2.5,
	3,
	3.5,
	4,
	4.5,
	5,
	5.5,
]

const DefaultLayout = () => {

	const [state, setState] = useState(0);

	const toggle = () => {
		setState((state + 1) % numbers.length);
		console.log("hello")
	}

	const num = numbers[state]; 
	console.log(state)

	return (
		<div>
			<div className={style.background} style={{ transform: `scale(${num})` }}></div>
        	<div className={style.container} >
				<div className={style.timeline}>
					<div className={style.buttonArrowUp}>
						<ButtonArrowSmall />
					</div>
					{timelineData.map(item => (
						<button className={style.buttonYear} onClick={toggle}>
							<Year year={item} />
						</button>
					))}
					<div className={style.buttonArrowDown}>
						<ButtonArrowSmall />
					</div>
				</div>
				<div className={style.header}>
					<Header />
				</div>
				<div className={style.filter}>
					<Filter />
				</div>
        </div>
		
		</div>
    )
}

export default DefaultLayout;