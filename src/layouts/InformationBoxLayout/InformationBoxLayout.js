import React, { useState } from 'react';
import axios from 'axios';
import style from './InformationBoxLayout.module.css';
import InformationBox from '../../component/InformationBox/InformationBox';
import arrowButton from '../../assets/arrow-button.svg';

const InformationBoxLayout = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [timelineLength, setTimelineLength] = useState(1);
	const [activeYear, setActiveYear] = useState([]);

	axios
		.get('http://www.mocky.io/v2/5ea446a43000005900ce2ca3')
		.then((response) => {
			const responseData = response.data.timelineInfo;
			const filteredYear = responseData.filter((item) => item.year === '2018');
			setActiveYear(filteredYear);
		});

	const previousPageHandler = () => {
		let index = activeIndex;
		let lengthArray = timelineLength;

		index < 1 ? (index = lengthArray - 1) : index--;
		setActiveIndex(index);
	};

	const nextPageHandler = () => {
		let index = activeIndex;
		let length = timelineLength;

		index === length - 1 ? (index = 0) : index++;
		setActiveIndex(index);
	};

	return (
		<div className={style.infoBoxLayoutStyle}>
			<button className={style.leftArrow}>
				<img
					src={arrowButton}
					alt='previous-page-button'
					onClick={previousPageHandler}
				/>
			</button>
			{activeYear.map((component, index) => {
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
					onClick={nextPageHandler}
				/>
			</button>
		</div>
	);
};

export default InformationBoxLayout;
