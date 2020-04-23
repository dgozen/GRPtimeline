import React from 'react';
import style from './ReadMoreLink.module.css';

const ReadMoreLink = (props) => {
	return (
		//check target
		<a href={props.link} target='_blank' className={style.linkStyle}>
			Read More
		</a>
	);
};

export default ReadMoreLink;
