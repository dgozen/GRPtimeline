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
import Year1952 from './component/pages/Year1952/Year1952';
import Year1953 from './component/pages/Year1953/Year1953';
import Year1954 from './component/pages/Year1954/Year1954';
import Year1955 from './component/pages/Year1955/Year1955';
import Year1956 from './component/pages/Year1956/Year1956';
import Year1957 from './component/pages/Year1957/Year1957';
import Year1958 from './component/pages/Year1958/Year1958';
import Year1959 from './component/pages/Year1959/Year1959';
import Year1960 from './component/pages/Year1960/Year1960';
import Year1961 from './component/pages/Year1961/Year1961';
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
				<Route exact path="/1950" component={Year1950}></Route>
				<Route exact path="/1951" component={Year1951}></Route>
				<Route exact path="/1952" component={Year1952}></Route>
				<Route exact path="/1953" component={Year1953}></Route>
				<Route exact path="/1954" component={Year1954}></Route>
				<Route exact path="/1955" component={Year1955}></Route>
				<Route exact path="/1956" component={Year1956}></Route>
				<Route exact path="/1957" component={Year1957}></Route>
				<Route exact path="/1958" component={Year1958}></Route>
				<Route exact path="/1959" component={Year1959}></Route>
				<Route exact path="/1960" component={Year1960}></Route>
				<Route exact path="/1961" component={Year1961}></Route>
				
			</Switch>
		</Router>
	);
}

export default App;
