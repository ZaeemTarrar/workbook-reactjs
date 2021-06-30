import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
	return (
		<React.Fragment>
			<ul className="list-group">
				<li className="list-group-item" style={{ backgroundColor: 'black', color: 'white' }}>
					Main Menu
				</li>
				<Link to="/admin/">
					<li className="list-group-item"> Dashboard </li>
				</Link>
				<Link to="/admin/users">
					<li className="list-group-item"> Users </li>
				</Link>
				<Link to="/admin/todos">
					<li className="list-group-item"> Todos </li>
				</Link>
			</ul>
		</React.Fragment>
	);
};

export default SideMenu;
