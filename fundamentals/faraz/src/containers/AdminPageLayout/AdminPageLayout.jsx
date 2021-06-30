import React from 'react';
import SideMenu from '../../components/function/SideMenu/SideMenu';

const AdminPageLayout = (props) => {
	return (
		<React.Fragment>
			<br />
			<br />
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
						<SideMenu />
					</div>
					<div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">{props.children}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AdminPageLayout;
