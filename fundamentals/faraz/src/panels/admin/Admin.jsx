import React, { useEffect } from 'react';
import Printer from '../../utils/console';
import Login from '../../pages/admin/Login/Login';
import AdminMainNavigation from '../../routes/AdminMainNavigation/AdminMainNavigation';

const Admin = () => {
	Printer.set(`Admin Component - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Admin Component - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Admin Component - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			{/* <Login /> */}
			<AdminMainNavigation />
		</React.Fragment>
	);
};

export default Admin;
