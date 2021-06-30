import React, { useEffect, useState } from 'react';
import Printer from '../../utils/console';
import ClientPageLayout from '../../containers/ClientPageLayout/ClientPageLayout';
import ClientMainNavigation from '../../routes/ClientMainNavigation/ClientMainNavigation';

const Client = () => {
	Printer.set(`Client Component - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Client Component - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Client Component - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			<ClientPageLayout>
				<ClientMainNavigation />
			</ClientPageLayout>
		</React.Fragment>
	);
};

export default Client;
