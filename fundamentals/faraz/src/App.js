import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import MainNavigation from './routes/MainNavigation/MainNavigation';
import Printer from './utils/console';

const App = () => {
	Printer.set(`App Component - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`App Component - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`App Component - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			<MainNavigation />
		</React.Fragment>
	);
};

export default App;
