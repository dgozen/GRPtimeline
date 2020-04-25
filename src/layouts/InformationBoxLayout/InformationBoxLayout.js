import React, { useState } from 'react';
import style from './InformationBoxLayout.module.css';
import InformationBox from '../../component/InformationBox/InformationBox';
import arrowButton from '../../assets/arrow-button.svg';

const InformationBoxLayout = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [timelineLength, setTimelineLength] = useState(1);

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
			<div className={style.box1}>
				<InformationBox title='Test 1' text='Some text here' />
			</div>
			<div className={style.box2}>
				<InformationBox title='Test 2' text='Some text here' />
			</div>
			<div className={style.box3}>
				<InformationBox title='Test 3' text='Some text here' />
			</div>
			<div className={style.box4}>
				<InformationBox title='Test 4' text='Some text here' />
			</div>
			<div className={style.box5}>
				<InformationBox title='Test 5' text='Some text here' />
			</div>
			<div className={style.box6}>
				<InformationBox title='Test 6' text='Some text here' />
			</div>
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
