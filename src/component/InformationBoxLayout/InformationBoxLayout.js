import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './InformationBoxLayout.module.css';
import InformationBox from '../../component/InformationBox/InformationBox';
import arrowButton from '../../assets/arrow-button.svg';

const InformationBoxLayout = ({ clickedYear, selectedCategory }) => {
	const [activeYear, setActiveYear] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [chunksAmountInArray, setChunkAmountInArray] = useState(0);
	const [chunkYearArray, setChunkYearArray] = useState([]);

	useEffect(() => {
		axios
			.get('http://www.mocky.io/v2/5ea446a43000005900ce2ca3')
			.then((response) =>
				setActiveYear(
					response.data.timelineInfo.filter((item) => item.year === clickedYear)
				)
			);
	}, [clickedYear]);

	//this function is triggered filterCategory to see if there is more then one category selected
	//it loops through each item of the array checking for the matched category
	//toLowerCase() is used because I realised the buttons have capital casing and does not match with the JSON file
	const filterChecker = (checkArray, checkStringCategory) => {
		let checkResponse = false;

		for (let item of checkArray) {
			if (checkStringCategory.includes(item.toLowerCase())) {
				checkResponse = true;
				break;
			}
		}
		return checkResponse;
	};

	//this function check the selected year array and filters accourding to checked boxes
	const filterCategory = (array) => {
		const category = selectedCategory;
		array = array.filter((item) => filterChecker(category, item.category));
		return array;
	};

	//this stores all the categories in to one array so that it can be later mapped through to view the information boxes
	let filteredCategories = filterCategory(activeYear);

	//if the array is more then 6 items this will chunk it up to pieces
	const arrayChunk = (array, chunkSize) => {
		let amountOfChunks = 0;
		const chunkedArray = [];
		let clonedArray = [...array];
		if (array.length > chunkSize) {
			const splitPieces = Math.ceil(clonedArray.length / chunkSize);
			for (let i = 0; i < splitPieces; i++) {
				chunkedArray.push(clonedArray.splice(0, chunkSize));
				amountOfChunks++;
			}

			setChunkAmountInArray(amountOfChunks);
			return chunkedArray;
		} else {
			setChunkAmountInArray(0);
			return array;
		}
	};

	//this triggers everytime active year is clicked, also resets the active index to 0 on each year click on a new year
	useEffect(() => {
		setChunkYearArray(arrayChunk(activeYear, 6));
		setActiveIndex(0);
	}, [activeYear]);

	//these are the page flip functions
	const previousChunk = () => {
		let index = activeIndex;
		let length = chunksAmountInArray;

		if (index === 0) {
			index = 0;
		} else if (index < 1) {
			index = length - 1;
		} else {
			index--;
		}
		setActiveIndex(index);
	};

	const nextChunk = () => {
		let index = activeIndex;
		let length = chunksAmountInArray;

		if (index === length - 1) {
			index = 0;
		} else {
			index++;
		}
		setActiveIndex(index);
	};

	return (
		<div className={style.infoBoxLayoutStyle}>
			{chunksAmountInArray > 0 ? (
				<button className={style.leftArrow} onClick={previousChunk}>
					<img src={arrowButton} alt='previous-page-button' />
				</button>
			) : (
				<button className={style.leftArrowHidden} onClick={previousChunk}>
					<img src={arrowButton} alt='previous-page-button' />
				</button>
			)}

			{selectedCategory[0] === 'AllCategories'
				? chunksAmountInArray > 0
					? chunkYearArray[activeIndex].map((component, index) => {
							return (
								<div className={style.informationBoxLayer}>
									<InformationBox
										key={index}
										title={component.title}
										text={component.info}
										category={component.category}
										link={component.link}
									/>
								</div>
							);
					  })
					: activeYear.map((component, index) => {
							return (
								<div className={style.informationBoxLayer}>
									<InformationBox
										key={index}
										title={component.title}
										text={component.info}
										category={component.category}
										link={component.link}
									/>
								</div>
							);
					  })
				: filteredCategories.map((component, index) => {
						return (
							<div className={style.informationBoxLayer}>
								<InformationBox
									key={index}
									title={component.title}
									text={component.info}
									category={component.category}
									link={component.link}
								/>
							</div>
						);
				  })}

			{chunksAmountInArray > 0 ? (
				<button className={style.rightArrow} onClick={nextChunk}>
					<img
						src={arrowButton}
						alt='next-page-button'
						className={style.rotateArrowRight}
					/>
				</button>
			) : (
				<button className={style.rightArrowHidden} onClick={nextChunk}>
					<img
						src={arrowButton}
						alt='next-page-button'
						className={style.rotateArrowRight}
					/>
				</button>
			)}
		</div>
	);
};

export default InformationBoxLayout;
