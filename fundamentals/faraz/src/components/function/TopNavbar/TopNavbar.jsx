import React, { useState, useEffect } from 'react';
import Printer from '../../../utils/console';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
	Printer.set(`Top Navbar Component - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Top Navbar Component - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Tap Navbar Component - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	const [ servicesToggle, setServicesToggle ] = useState(false);

	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg navbar-light theme">
				<Link to="/" className="navbar-brand theme" href="#">
					Navbar
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link to="/" className="nav-link theme" href="#">
								Home
							</Link>
						</li>
						<li className="nav-item theme">
							<Link to="/about" className="nav-link theme" href="#">
								About
							</Link>
						</li>
						<li
							className={`nav-item dropdown ${servicesToggle ? `show` : ``}`}
							onClick={(e) => {
								e.preventDefault();
								setServicesToggle(!servicesToggle);
							}}
						>
							<a
								className="nav-link theme dropdown-toggle"
								href="#"
								onClick={(e) => {
									e.preventDefault();
									setServicesToggle(!servicesToggle);
								}}
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Services
							</a>
							<div
								className={`dropdown-menu  ${servicesToggle ? `show` : ``}`}
								aria-labelledby="navbarDropdown"
							>
								<a className="dropdown-item" href="#">
									Html5
								</a>
								<a className="dropdown-item" href="#">
									Css3
								</a>
								<a className="dropdown-item" href="#">
									Javascript
								</a>
								<div className="dropdown-divider" />
								<Link to="/counter-module" className="dropdown-item" href="#">
									Counter Module
								</Link>
							</div>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link theme" href="#">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default TopNavbar;
