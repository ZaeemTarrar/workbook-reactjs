import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CounterPage from '../../pages/CounterPage/CounterPage';

const ClientMainNavigation = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route path="/" exact>
					Home
				</Route>
				<Route path="/about" exact>
					About
				</Route>
				<Route path="/contact" exact>
					Contact
				</Route>
				<Route path="/counter-module" exact>
					<CounterPage />
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default ClientMainNavigation;
