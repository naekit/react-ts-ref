import React from "react"
import Todo from "../models/todo"

type TodosContextObj = {
	todos: Todo[]
	addTodo: (text: string) => void
	removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
	todos: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
})

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = React.useState<Todo[]>([])

	const addTodo = (text: string) => {
		const newTodo = new Todo(text)
		setTodos((prevTodos) => prevTodos.concat(newTodo))
	}

	const removeTodo = (id: string) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
	}

	const contextValue: TodosContextObj = {
		todos: todos,
		addTodo: addTodo,
		removeTodo: removeTodo,
	}

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	)
}

export default TodosContextProvider
