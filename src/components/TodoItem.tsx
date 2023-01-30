import React from "react"
import styles from "./TodoItem.module.css"

const TodoItem: React.FC<{
	text: string
	onRemove: () => void
}> = (props) => {
	return (
		<li onClick={props.onRemove} className={styles.item}>
			{props.text}
		</li>
	)
}

export default TodoItem
