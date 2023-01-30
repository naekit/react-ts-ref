import React, { useContext } from "react"
import Todo from "../models/todo"
import { TodosContext } from "../store/todo-context"
import TodoItem from "./TodoItem"
import styles from "./Todos.module.css"

const Todos: React.FC<{}> = (props) => {
	const TodosCtx = useContext(TodosContext)

	return (
		<ul className={styles.todos}>
			{TodosCtx.todos.map((item) => (
				<TodoItem
					onRemove={TodosCtx.removeTodo.bind(null, item.id)}
					key={item.id}
					text={item.text}
				/>
			))}
		</ul>
	)
}

export default Todos
