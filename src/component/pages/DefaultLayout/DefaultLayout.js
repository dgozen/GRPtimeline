import React from 'react';
import { useState, useEffect } from 'react';
import style from './DefaultLayout.module.css';
import Header from '../../Header/Header';
import ButtonArrowSmall from '../../Buttons/ButtonArrowSmall/ButtonArrowSmall';
import InformationBoxLayout from '../../InformationBoxLayout/InformationBoxLayout';
import Filter from '../../Filter/Filter';
import APIFetch from '../../APIFetch/APIFetch';
import AddButton from '../../Buttons/AddButton/AddButton';


// ToDo:

// - Export each layer as an SVG with the year it’s representing as name and place in assets folder. Default color: white

// - Place all images in an array.

// - Use inline styling and if else statements to decide which background to show onClick on each year. 

// let background=” ”

// backgroundArray = [
// img(src=””),
// img(),
// img(),
// ]

// const backroundHandler = ()
//  => { 
// if(year state === 1999) {
// background = [0, 9]
// }};


// background: background onClick=backgroundHandler


// CSS:

// - fix the size and placement of the images (absolut positioning, z-index)

// -  Look up how to change colors on SVG:s

const numbers = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];

const DefaultLayout = () => {
	const [scalingState, setScalingState] = useState(0);
	const [yearsArray, setYearsArrayState] = useState([]);
	const [clickedYear, setClickedYear] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('AllCategories');
	const timelineData = APIFetch();

	useEffect(() => {
		timelineData.then((data) => {
			let yearsArrays = [];
			for (let item of data.timelineInfo) {
				yearsArrays.push(item.year);
			}

			setArray(yearsArrays);
		});
	}, []);

	const setArray = (array) => {
		const passArray = new Set(array);
		const oneOfEachYear = [...passArray];
		setYearsArrayState(oneOfEachYear);
	};

	const toggle = () => {
		setScalingState((scalingState + 1) % numbers.length);
	};

	const num = numbers[scalingState];

	return (
		<div>
			<div
				className={style.background}
				style={{ transform: `scale(${num})` }}
			></div>
			<div className={style.container}>
				<div className={style.timeline}>
					<div className={style.buttonArrowUp}>
						<ButtonArrowSmall />
					</div>
					{yearsArray.map((item, index) => (
						<button
							key={index}
							className={style.buttonYear}
							onClick={() => {
								toggle();
								setClickedYear(item);
								console.log(clickedYear);
							}}
						>
							{item}
						</button>
					))}

					<div className={style.buttonArrowDown}>
						<ButtonArrowSmall />
					</div>
				</div>
				<div className={style.header}>
					<Header />
				</div>
				<InformationBoxLayout clickedYear={clickedYear} />
				<div className={style.filter}>
					<Filter />
				</div>
				<div className={style.addbutton}>
					<AddButton />
				</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
