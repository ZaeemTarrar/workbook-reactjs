import React, { useEffect } from 'react';
import Printer from '../../utils/console';
import { connect } from 'react-redux';
import * as CounterActions from '../../store/actions/Counter/Counter';

const CounterPage = (props) => {
	Printer.set(`Counter Page - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Counter Page - useEffect`).c('orange').s(16).b().write();
		return () => {
			Printer.set(`Counter Page - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	return (
		<React.Fragment>
			<br />
			<div className="container">
				<div>
					<h1> {props.count} </h1>
				</div>
				<div>
					<button className="btn btn-primary" onClick={() => props.addCounter()}>
						Add
					</button>
					&nbsp;
					<button className="btn btn-primary" onClick={() => props.subtractCounter()}>
						Subtract
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	count: state.counter.count
});

const mapDispatchToProps = (dispatch) => {
	return {
		addCounter: () => CounterActions.AddCounter(dispatch),
		subtractCounter: () => CounterActions.SubtractCounter(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
