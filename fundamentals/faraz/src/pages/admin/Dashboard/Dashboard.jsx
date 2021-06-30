import React, { useEffect } from 'react';
import Printer from '../../../utils/console';

const Dashboard = () => {
	Printer.set(`Dashboard Component - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Dashboard Component - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Dashboard Component - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			<div className="container">
				<br />
				<div className="jumbotron">
					<h1>Dashboard</h1>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
