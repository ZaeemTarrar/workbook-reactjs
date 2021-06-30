import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Client from './../../panels/client/Client';
import Admin from './../../panels/admin/Admin';
import Printer from '../../utils/console';

const MainNavigation = () => {
	Printer.set(`Main Navigation Component - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Main Navigation Component - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Main Navigation Component - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			<Switch>
				<Route path="/admin">
					<Admin />
				</Route>
				<Route path="/">
					<Client />
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default MainNavigation;
