import React from 'react';
import style from './InformationBoxLayout.module.css';
import InformationBox from '../../component/InformationBox/InformationBox';

const InformationBoxLayout = (props) => {
	return (
		<div className={style.infoBoxLayoutStyle}>
			<InformationBox title='Test 1' text='Some text here' />
		</div>
	);
};

export default InformationBoxLayout;
