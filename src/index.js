import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import './fonts/FranklinGothicBookRegular.ttf';
import './fonts/FranklinGothicHeavyRegular.ttf';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
