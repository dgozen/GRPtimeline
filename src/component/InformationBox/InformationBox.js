import React from 'react';
import style from './InformationBox.module.css';
import ReadMoreLink from '../Buttons/ReadMoreLink/ReadMoreLink';

const InformationBox = (props) => {
	return (
		<div className={style.boxStyle}>
			<h2>{props.title}</h2>
			<p>{props.text}</p>
			<ReadMoreLink link='https://www.google.com' />
		</div>
	);
};

export default InformationBox;
