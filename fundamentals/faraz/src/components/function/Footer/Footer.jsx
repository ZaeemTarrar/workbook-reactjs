import React, { useEffect } from 'react';
import Printer from '../../../utils/console';

const Footer = () => {
	Printer.set(`Footer Component - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Footer Component - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Footer Component - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			<footer className="mt-20 text-center pad-20 theme">© 2020 Copyright</footer>
		</React.Fragment>
	);
};

export default Footer;
