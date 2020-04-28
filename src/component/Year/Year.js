import React from 'react';
import style from './Year.module.css';
import { Link } from 'react-router-dom';

const Year = ({ year, clickedYear }) => {
	return (
		<div>
			<Link to={year} className={style.link} clickedYear={clickedYear}>
				<p>{year}</p>
			</Link>
		</div>
	);
};

export default Year;
