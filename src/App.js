import React from 'react';
import style from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Timeline from './component/Timeline/Timeline';

const timelineData = [
	1950,
	1951,
	1952,
	1953,
	1954,
	1955,
	1956,
	1957,
	1958,
	1959,
	1960,
	1961
]

function App() {
	axios
		.get('http://www.mocky.io/v2/5ea0850b3200006f0094afb5')
		.then((response) => {
			const responseData = response.data.timelineInfo[0];
			const { category } = responseData;
			console.log(category);
		});
	return (
		<BrowserRouter>
		{timelineData.map(item => (
			<Timeline year={item} />
		))}
			
		</BrowserRouter>
	);
}

export default App;
