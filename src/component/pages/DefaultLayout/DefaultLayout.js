import React from 'react';
import { useState, useEffect } from 'react';
import style from './DefaultLayout.module.css';
import Header from '../../Header/Header';
import ButtonArrowSmall from '../../Buttons/ButtonArrowSmall/ButtonArrowSmall';
import InformationBoxLayout from '../../InformationBoxLayout/InformationBoxLayout';
import Filter from '../../Filter/Filter';
import APIFetch from '../../APIFetch/APIFetch';
import AddButton from '../../Buttons/AddButton/AddButton';
import backgrounds from './backgrounds';
import Form from '../../Form/Form';
import Backdrop from '../../Backdrop/Backdrop';

const DefaultLayout = () => {
	const [yearsArray, setYearsArrayState] = useState([]);
	const [clickedYear, setClickedYear] = useState('onload');
	const [selectedCategory, setSelectedCategory] = useState([]);

	const timelineData = APIFetch();

	// this function yearsToRender filters the images on the keys < or = clickedYear
	// and transforms the key and clickedYear from string to integer using parseInt()
	const yearsToRender = Object.entries(backgrounds).filter(
		([key]) => parseInt(key) <= parseInt(clickedYear)
	);

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

	// Add button
	const [showForm, setShowForm] = useState(false);

	const clickHandler = () => {
		setShowForm(!showForm);
	};

	

	return (
		<div>
			{/* this function maps through the yearsToRender function, and renders all images < = to clickedYear  */}
			{yearsToRender.map(([, yearToRender]) => (
				<img
					className={style.background}
					style={{
						width: yearToRender.width,
						left: yearToRender.left,
						top: yearToRender.top,
					}}
					src={yearToRender.year}
					alt=''
				/>
			))}
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
								setClickedYear(item);
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
				<div className={style.informationLayout}>
					{clickedYear === 'onload' ? null : (
						<InformationBoxLayout
							clickedYear={clickedYear}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
					)}
				</div>
				<div className={style.filter}>
					<Filter
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				</div>
				<div className={style.addbutton} onClick={() => clickHandler()}>
					<AddButton />
				</div>
				<div className={style.backdrop}>
					{showForm ? <Backdrop /> : setShowForm}
				</div>
				<div className={style.form}>{showForm ? <Form 
				clickHandler = {clickHandler}
				/> : setShowForm}</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
