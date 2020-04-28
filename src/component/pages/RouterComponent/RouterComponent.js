import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './Router.module.css';
import Year1950 from '../Year1950/Year1950';
import Year1951 from '../Year1951/Year1951';
import Year1952 from '../Year1952/Year1952';
import Year1953 from '../Year1953/Year1953';
import Year1954 from '../Year1954/Year1954';
import Year1955 from '../Year1955/Year1955';
import Year1956 from '../Year1956/Year1956';
import Year1957 from '../Year1957/Year1957';
import Year1958 from '../Year1958/Year1958';
import Year1959 from '../Year1959/Year1959';
import Year1960 from '../Year1960/Year1960';
import Year2009 from '../Year2009/Year2009';
import DefaultLayout from '../DefaultLayout/DefaultLayout';

export default function RouterComponent() {
	return (
		<Router>
			<DefaultLayout />
			<Switch>
				<Route exact path='/' component={Year1950} className={style.year1950} />
				<Route exact path='/1950' component={Year1950} />
				<Route exact path='/1951' component={Year1951} />
				<Route exact path='/1952' component={Year1952} />
				<Route exact path='/1953' component={Year1953} />
				<Route exact path='/1954' component={Year1954} />
				<Route exact path='/1955' component={Year1955} />
				<Route exact path='/1956' component={Year1956} />
				<Route exact path='/1957' component={Year1957} />
				<Route exact path='/1958' component={Year1958} />
				<Route exact path='/1959' component={Year1959} />
				<Route exact path='/1960' component={Year1960} />
				<Route exact path='/2009' component={Year2009} />
			</Switch>
		</Router>
	);
}
