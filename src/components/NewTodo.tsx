import React, { useContext, useRef } from "react"
import styles from "./NewTodo.module.css"
import { TodosContext } from "../store/todo-context"

const NewTodo: React.FC<{}> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null)
	const formRef = useRef<HTMLFormElement>(null)
	const TodosCtx = useContext(TodosContext)

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		const enteredText = textInputRef.current!.value
		if (enteredText.trim().length === 0) {
			// throw an error
			return
		}

		formRef.current!.reset()
		TodosCtx.addTodo(enteredText)
	}

	return (
		<form ref={formRef} className={styles.form} onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={textInputRef} />
			<button type="submit">Add Todo</button>
		</form>
	)
}

export default NewTodo
