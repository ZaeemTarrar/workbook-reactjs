import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminPageLayout from '../../containers/AdminPageLayout/AdminPageLayout';
import Dashboard from '../../pages/admin/Dashboard/Dashboard';
import Todo from '../../pages/admin/Todo/Todo';
import Printer from '../../utils/console';

const AdminMainNavigation = () => {
	Printer.set(`Admin Main Navigation - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Admin Main Navigation - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Admin Main Navigation - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			<AdminPageLayout>
				<Switch>
					<Route path="/admin/" exact>
						<Dashboard />
					</Route>
					<Route path="/admin/users" exact>
						Users
					</Route>
					<Route path="/admin/todos" exact>
						<Todo />
					</Route>
				</Switch>
			</AdminPageLayout>
		</React.Fragment>
	);
};

export default AdminMainNavigation;
