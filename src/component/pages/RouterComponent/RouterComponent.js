import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './Router.module.css';
import DefaultLayout from '../DefaultLayout/DefaultLayout';

export default function RouterComponent() {
	return (
		<Router>
			<DefaultLayout />
		</Router>
	);
}
