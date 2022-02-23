class Todo {
	constructor(description, completed, index) {
		this.description = description
		this.completed = completed
		this.index = index
	}
}

const saveTodos = () => {
	let existingTodos = JSON.parse(localStorage.getItem('todos'))
	existingTodos = existingTodos === null ? [] : existingTodos

	let inputTodo = document.querySelector('#description').value
	const todo = new Todo(inputTodo, false, existingTodos.length)

	existingTodos.push(todo)

	localStorage.setItem('todos', JSON.stringify(existingTodos))
	document.querySelector('#description').value = ''

	populateTodos()
}


const populateTodos = () => {
	let existingTodos = JSON.parse(localStorage.getItem('todos'))
	if (existingTodos !== null && existingTodos.length > 0) {
     
	}
}

export { saveTodos }

