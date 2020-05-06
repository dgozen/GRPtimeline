import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return (
		<div className={style.headerContainer}>
			<h1 className={style.headerStyle}>Timeline of Resilience Thinking</h1>
		</div>
	);
};

export default Header;
