import React from 'react';
import style from './InformationBox.module.css';
import ReadMoreLink from '../Buttons/ReadMoreLink/ReadMoreLink';

const InformationBox = (props) => {
	return (
		<div className={style.boxStyle}>
			<h2>{props.title}</h2>
			<p>{props.text}</p>
			<div className={style.linkPlacement}>
				<ReadMoreLink link={props.link} />
			</div>
		</div>
	);
};

export default InformationBox;
