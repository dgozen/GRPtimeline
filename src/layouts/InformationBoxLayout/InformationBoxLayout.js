import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './InformationBoxLayout.module.css';
import InformationBox from '../../component/InformationBox/InformationBox';
import arrowButton from '../../assets/arrow-button.svg';

const InformationBoxLayout = (props) => {
	const [activeYear, setActiveYear] = useState([]);
	const [splitPages, setSplitPages] = useState([]);

	useEffect(() => {
		axios
			.get('http://www.mocky.io/v2/5ea446a43000005900ce2ca3')
			.then((response) =>
				setActiveYear(
					response.data.timelineInfo.filter((item) => item.year === '2018')
				)
			);
	}, []);

	const splitArray = (array) => {
		const length = array.length;
		const chunkedArray = [];

		for (let i = 0; i < length; i += 6) {
			let slicedPieces = array.splice(i, i + 6);
			chunkedArray.push(slicedPieces);
		}
		setSplitPages(chunkedArray);
	};

	return (
		<div className={style.infoBoxLayoutStyle}>
			<button className={style.leftArrow}>
				<img src={arrowButton} alt='previous-page-button' />
			</button>
			{activeYear.length > 6
				? splitArray(activeYear)
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
			{console.log(splitPages)}
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
