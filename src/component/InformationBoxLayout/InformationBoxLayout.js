import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './InformationBoxLayout.module.css';
import InformationBox from '../../component/InformationBox/InformationBox';
import arrowButton from '../../assets/arrow-button.svg';

const InformationBoxLayout = (props) => {
	const [activeYear, setActiveYear] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [chunkAmounts, setchunkAmounts] = useState(0);

	const previousChunk = () => {
		let index = activeIndex;
		let length = chunkAmounts;
	};

	useEffect(() => {
		axios
			.get('http://www.mocky.io/v2/5ea446a43000005900ce2ca3')
			.then((response) =>
				setActiveYear(
					response.data.timelineInfo.filter((item) => item.year === '1950')
				)
			);
	}, []);

	console.log('active year array: ', activeYear);

	const arrayChunk = (array, chunkSize) => {
		if (array.length > 6) {
			const chunkedArray = [];
			let clonedArray = [...array];
			let amountOfChunks = 0;
			const splitPieces = Math.ceil(clonedArray.length / chunkSize);
			for (let i = 0; i < splitPieces; i++) {
				chunkedArray.push(clonedArray.splice(0, chunkSize));
				amountOfChunks++;
			}
			setchunkAmounts(amountOfChunks);
			return chunkedArray;
		} else {
			return array;
		}
	};
	console.log('amount of chunks is', chunkAmounts);
	const chunkYearArray = arrayChunk(activeYear);

	return (
		<div className={style.infoBoxLayoutStyle}>
			<button className={style.leftArrow}>
				<img src={arrowButton} alt='previous-page-button' />
			</button>
			{chunkYearArray.map((component, index) => {
				return (
					<InformationBox
						key={index}
						title={component.title}
						text={component.info}
						link={component.link}
					/>
				);
			})}
			<button className={style.rightArrow}>
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
