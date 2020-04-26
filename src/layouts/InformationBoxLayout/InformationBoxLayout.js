import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './InformationBoxLayout.module.css';
import InformationBox from '../../component/InformationBox/InformationBox';
import arrowButton from '../../assets/arrow-button.svg';

const InformationBoxLayout = (props) => {
	const [activeYear, setActiveYear] = useState([]);

	useEffect(() => {
		axios
			.get('http://www.mocky.io/v2/5ea446a43000005900ce2ca3')
			.then((response) =>
				setActiveYear(
					response.data.timelineInfo.filter((item) => item.year === '2004')
				)
			);
	}, []);

	console.log('active year array: ', activeYear);

	const arrayChunk = (array, chunkSize) => {
		const chunkedArray = [];
		let clonedArray = [...array];
		const splitPieces = Math.ceil(clonedArray.length / chunkSize);
		for (let i = 0; i < splitPieces; i++) {
			chunkedArray.push(clonedArray.splice(0, chunkSize));
		}
		return chunkedArray;
	};
	const chunkedYearArray =
		activeYear.length > 6 ? arrayChunk(activeYear, 6) : [];

	return (
		<div className={style.infoBoxLayoutStyle}>
			<button className={style.leftArrow}>
				<img src={arrowButton} alt='previous-page-button' />
			</button>
			{activeYear.length > 6
				? chunkedYearArray.map((component, index) => {
						return (
							<InformationBox
								key={index}
								title={component.title}
								text={component.info}
								link={component.link}
							/>
						);
				  })
				: activeYear.map((component, index) => {
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
