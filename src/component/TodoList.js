import React, { Component } from "react";
import { Table, Container, Row} from 'reactstrap';
import CreateForm from './CreateForm';
import ToDoItem from './ToDoItem';
import ShowItem from './ShowItem';
import '../css/index.css';

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{
					id: 1, name: "Huy"
				},
				{
					id: 2, name: "Hanh"
				},
				{
					id: 3, name: "Hong"
				}
			],
			taskName: ''
		}
	}
	onAddItem(e) {
		e.preventDefault();
		let newTask = { id: Date.now(), name: this.state.taskName }
		this.setState({
			items: [...this.state.items, newTask]
		})
	}

	onDeleteItem(id) {
		const filterItems = this.state.items.filter(item => {
			return item.id !== id
		})
		this.setState({
			items: filterItems
		})
	}

	onChange(e) {
		const taskName = e.target.value;
		this.setState({
			taskName: taskName
		})
	}

	onShow(task) {
		<ShowItem
			id={task.id}
			name={task.name}
		/>
	}

	renderItem() {
		const items = this.state.items.map((task) =>
			<ToDoItem
				key={task.id}
				name={task.name}
				onDelete={() => this.onDeleteItem(task.id)}
				onShow={() => this.onShow({id: task.id, name: task.name})}
			/>
		)
		return items
	}

	render() { 
		return(
			<Container>
			<Row>
				<Table>
					<thead>
						<tr>
							<th>Task Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.renderItem()}
					</tbody>
				</Table>
			</Row>
			<CreateForm
				onAddItem={(e) => this.onAddItem(e)}
				value={this.state.taskName}
				onChange={(e) => this.onChange(e)}
			/>
			</Container>
		)
	}
}

export default TodoList