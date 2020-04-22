import React from 'react';
import classes from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

function App() {
	return (
		<BrowserRouter>
			<header>
				<p className={classes.test}>Let the time line magic begin!</p>
			</header>
		</BrowserRouter>
	);
}

export default App;
