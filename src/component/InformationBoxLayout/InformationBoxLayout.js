import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './InformationBoxLayout.module.css';
import InformationBox from '../../component/InformationBox/InformationBox';
import arrowButton from '../../assets/arrow-button.svg';

const InformationBoxLayout = ({ clickedYear }) => {
	const [activeYear, setActiveYear] = useState([]);
	const [activeIndex, setActiveIndex] = useState(1);
	const [chunksAmountInArray, setChunkAmountInArray] = useState(0);

	useEffect(() => {
		axios
			.get('http://www.mocky.io/v2/5ea446a43000005900ce2ca3')
			.then((response) =>
				setActiveYear(
					response.data.timelineInfo.filter((item) => item.year === clickedYear)
				)
			);
	}, [clickedYear]);

	const previousChunk = () => {
		let index = activeIndex;
		let length = chunksAmountInArray;
		console.log('active index is', index);

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
		console.log('active index is', index);

		if (index === length - 1) {
			index = 0;
		} else {
			index++;
		}
		setActiveIndex(index);
	};

	let amountOfChunks = 0;
	const arrayChunk = (array, chunkSize) => {
		if (array.length > 6) {
			const chunkedArray = [];
			let clonedArray = [...array];

			const splitPieces = Math.ceil(clonedArray.length / chunkSize);
			for (let i = 0; i < splitPieces; i++) {
				chunkedArray.push(...clonedArray.splice(0, chunkSize));
				amountOfChunks++;
				console.log('amout of chunks is', amountOfChunks);
			}
			return chunkedArray;
		} else {
			return array;
		}
	};
	console.log('after the functionhas run', amountOfChunks);

	useEffect(() => {
		setChunkAmountInArray(amountOfChunks);
	}, [amountOfChunks]);

	const chunkYearArray = arrayChunk(activeYear, 6);

	return (
		<div className={style.infoBoxLayoutStyle}>
			<button className={style.leftArrow} onClick={previousChunk}>
				<img src={arrowButton} alt='previous-page-button' />
			</button>

			{chunksAmountInArray > 0
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
				: chunkYearArray.map((component, index) => {
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
			<button className={style.rightArrow} onClick={nextChunk}>
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
