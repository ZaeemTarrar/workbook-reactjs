import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';

const Login = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" />
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<div className="card" style={{ marginTop: '200px' }}>
							<div className="card-header theme">
								<PersonFill /> &nbsp; Sign-Up
							</div>
							<div className="card-body">
								<div className="form-group">
									<label htmlFor="">
										<b> Username </b>
									</label>
									<input type="text" placeholder="Username" className="form-control" />
								</div>
								<div className="form-group">
									<label htmlFor="">
										<b> Password </b>
									</label>
									<input type="password" placeholder="Password" className="form-control" />
								</div>
								<div className="text-right">
									<button className="pull-right btn theme">Login</button>
									<div className="clearfix" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
