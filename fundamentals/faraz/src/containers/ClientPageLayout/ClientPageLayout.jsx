import React, { useEffect } from 'react';
import TopNavbar from '../../components/function/TopNavbar/TopNavbar';
import Footer from '../../components/function/Footer/Footer';
import Printer from '../../utils/console';

const ClientPageLayout = (props) => {
	Printer.set(`Client Page Container - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Client Page Container - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Client Page Container - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			<TopNavbar />
			{props.children}
			<Footer />
		</React.Fragment>
	);
};

export default ClientPageLayout;
