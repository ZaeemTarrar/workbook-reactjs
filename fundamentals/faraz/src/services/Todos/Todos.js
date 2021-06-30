import axios from 'axios';
import Printer from '../../utils/console';

const TodosService = {
	Get() {
		Printer.set(`Todo Get Service`).c('pink').s(16).b().write();
		return axios
			.get(`https://jsonplaceholder.typicode.com/todos`)
			.then((response) => {
				return response.data;
			})
			.then((json) => {
				return json.reverse();
			});
	}
};

export default TodosService;
