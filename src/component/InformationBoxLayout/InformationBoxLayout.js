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
	const [filteredCategories, setFilteredCategories] = useState([]);
	const showArrow = chunksAmountInArray > 0 || filteredCategories.length > 6;

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
	//it loops through each item of the array checking for the matched category and returns
	//true if it matches
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

	//if the array has more then 6 items this will chunk it up to pieces
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
			console.log('chunkedAray:', chunkedArray);
			return chunkedArray;
		} else {
			setChunkAmountInArray(0);
			console.log('array:', array);
			return array;
		}
	};

	//this triggers everytime active year is clicked, also resets the active index to 0 on each year click on a new year
	//filter category works by first getting the category from previous component
	//the array is chunked depending on which category is selected
	useEffect(() => {
		const filterCategory = (array, category) => {
			array = array.filter((item) => filterChecker(category, item.category));
			return array;
		};
		if (
			selectedCategory.length > 0 &&
			selectedCategory[0] !== 'AllCategories'
		) {
			setChunkYearArray(
				arrayChunk(filterCategory(activeYear, selectedCategory), 6)
			);
			console.log('full array');
			console.log(selectedCategory.length, selectedCategory[0]);
		} else {
			setChunkYearArray(arrayChunk(activeYear, 6));
			console.log('empty array');
		}
		setActiveIndex(0);
		setFilteredCategories(filterCategory(activeYear, selectedCategory));
	}, [activeYear, selectedCategory]);

	//these are the page flip functions
	const previousChunk = () => {
		let index = activeIndex;
		let length = chunksAmountInArray;

		if (index < 1) {
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
			<button
				className={showArrow ? style.leftArrow : style.leftArrowHidden}
				onClick={nextChunk}
			>
				<img
					src={arrowButton}
					alt='next-page-button'
					className={style.rotateArrowRight}
				/>
			</button>

			{selectedCategory.length === 0
				? null
				: chunksAmountInArray > 0
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
				: selectedCategory[0] === 'AllCategories'
				? activeYear.map((component, index) => {
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

			<button
				className={showArrow ? style.rightArrow : style.rightArrowHidden}
				onClick={nextChunk}
			>
				<img
					src={arrowButton}
					alt='next-page-button'
					className={style.rotateArrowRight}
				/>
			</button>
		</div>
	);
};

export default InformationBoxLayout;
