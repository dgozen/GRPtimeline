import React from 'react';
import classes from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

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
			<header>
				<p className={classes.test}>Let the time line magic begin!</p>
			</header>
		</BrowserRouter>
	);
}

export default App;
