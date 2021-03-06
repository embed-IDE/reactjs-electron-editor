import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import configureStore from './stores';

const store = configureStore();

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);