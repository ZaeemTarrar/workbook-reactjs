import React, { useEffect } from 'react';
import Printer from '../../../utils/console';
import { connect } from 'react-redux';
import * as TodosActions from './../../../store/actions/Todos/Todos';
import { Spinner } from 'react-bootstrap';
import { CheckCircleFill, XOctagonFill } from 'react-bootstrap-icons';

const Todo = (props) => {
	Printer.set(`Todo Component - Direct`).c('gold').s(16).b().write();

	useEffect(() => {
		Printer.set(`Todo Component - useEffect`).c('orange').s(16).b().write();
		Refreshers();
		return () => {
			Printer.set(`Todo Component - Destroy`).c('red').s(16).b().write();
		};
	}, []);

	const Refreshers = () => {
		Printer.set(`Todo Component - Refreshers`).c('cyan').s(16).b().write();
		props.fetchTodos();
	};

	const Loader = () => {
		return (
			<tr>
				<td colSpan={100}>
					<div className="text-center pad-20" style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Spinner animation="border" />
					</div>
				</td>
			</tr>
		);
	};

	const SingleTodo = (todo) => {
		const { id, userId, title, completed } = todo;
		return (
			<tr>
				<td>{id}</td>
				<td>{userId}</td>
				<td>{title}</td>
				<td>
					{completed ? (
						<CheckCircleFill color={`green`} size={30} />
					) : (
						<XOctagonFill color={`red`} size={30} />
					)}
				</td>
				<td>-</td>
				<td>-</td>
			</tr>
		);
	};

	const ListOfTodo = () => {
		return props.todos.map((row, index) => {
			return <React.Fragment key={index}>{SingleTodo(row)}</React.Fragment>;
		});
	};

	const ContentDecision = () => {
		if (props.todos.length > 0) {
			return ListOfTodo();
		} else {
			return Loader();
		}
	};

	const Table = () => {
		return (
			<React.Fragment>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Id</th>
							<th>User Id</th>
							<th>Title</th>
							<th>Completed</th>
							<th>Edit</th>
							<th>Del</th>
						</tr>
					</thead>
					<tbody>{ContentDecision()}</tbody>
				</table>
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<div>
				<button className="btn theme" onClick={() => Refreshers()}>
					Refresh
				</button>
				<br />
				<br />
			</div>
			{/* <pre>{JSON.stringify(props.todos, null, 2)}</pre> */}
			<div>{Table()}</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos.todos
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTodos: () => TodosActions.FetchTodos(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
