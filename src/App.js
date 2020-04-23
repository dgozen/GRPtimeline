import React from 'react';
import style from './App.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import axios from 'axios';
import Timeline from './component/Timeline/Timeline';
import Year1950 from './component/pages/Year1950/Year1950';
import Year1951 from './component/pages/Year1951/Year1951';
import DefaultLayout from './component/pages/DefaultLayout/DefaultLayout';

function App() {
	axios
		.get('http://www.mocky.io/v2/5ea0850b3200006f0094afb5')
		.then((response) => {
			const responseData = response.data.timelineInfo[0];
			const { category } = responseData;
			console.log(category);
		});
	return (
		
		<Router>
			<DefaultLayout />
			<Switch>
				<Route exact path="/" component={Year1950}></Route>
				<Route exact path="/1951" component={Year1951}></Route>
				
			</Switch>
		</Router>
	);
}

export default App;
