import dots from '../assets/images/dots.png'
import removeIcon from '../assets/images/delete.png'
import saveImg from '../assets/images/save.jpeg'

class Todo {
	constructor(description, completed, index) {
		this.description = description
		this.completed = completed
		this.index = index
	}
}

const deleteTodos = e => {
	const removeBtn = e.target
	const id = parseInt(removeBtn.id, 10)
	let existingTodos = JSON.parse(localStorage.getItem('todos'))
	existingTodos = existingTodos.filter((todos, index) => index !== id)
	removeBtn.parentNode.remove()
	localStorage.setItem('todos', JSON.stringify(existingTodos))
	createTodos()
}

const saveTodos = e => {
	const saveEditBtn = e.target
	let existingTodos = JSON.parse(localStorage.getItem('todos'))

	const item = document.querySelector(`#complete-${saveEditBtn.id}`)
	const taskList = document.querySelector(`#tasks-${saveEditBtn.id}`)
	const saveEdit = document.querySelector(`.save-${saveEditBtn.id}`)
	const deleteEdit = document.querySelector(`.delete-${saveEditBtn.id}`)
	const inputId = document.querySelector(`#complete-${saveEditBtn.id}`)

	existingTodos[saveEditBtn.id].description = inputId.value
	localStorage.setItem('todos', JSON.stringify(existingTodos))
	saveEdit.remove()
	deleteEdit.remove()
	taskList.classList.remove('active')
	item.setAttribute('readonly', true)
}

const editTodos = e => {
	const editInput = e.target
	const inputId = document.querySelector(`#complete-${editInput.id}`)
	inputId.removeAttribute('readonly')
	inputId.focus()

	const taskList = document.querySelector(`#tasks-${editInput.id}`)
	taskList.classList.add('active')
	const task = document.querySelector('.task')

	const save = document.createElement('img')
	save.setAttribute('src', saveImg)
	save.classList.add(`save-${editInput.id}`)
	save.className += 'save'
	task.appendChild(save)

	const removeBtn = document.createElement('img')
	removeBtn.setAttribute('src', removeIcon)
	removeBtn.id = editInput.id
	removeBtn.classList.add(`delete-${editInput.id}`)
	task.appendChild(removeBtn)

	const deleteEdit = document.querySelector(`.delete-${editInput.id}`)

	deleteEdit.addEventListener('click', deleteTodos)

	document.querySelectorAll('.save').forEach(e => {
		e.addEventListener('click', saveTodos)
	})
}

const createTodos = () => {
	const existingTodos = JSON.parse(localStorage.getItem('todos'))
	if (existingTodos !== null && existingTodos.length > 0) {
		const todoContainer = document.querySelector('.todo-container')
		todoContainer.innerHTML = ''

		existingTodos.forEach((todo, index) => {
			const taskList = document.createElement('div')
			const task = document.createElement('div')

			taskList.classList.add('tasks')
			taskList.id = `tasks-${index}`

			task.classList.add('task')

			const input = document.createElement('input')
			input.type = 'checkbox'
			input.classList.add('checkbox')
			input.classList.add('.checkbox')

			const item = document.createElement('input')
			item.type = 'text'
			item.classList.add('item')
			item.setAttribute('readonly', true)
			item.value = `${todo.description}`
			item.innerHTML = todo.description
			item.id = `complete-${index}`

			const edit = document.createElement('img')
			edit.setAttribute('src', dots)
			edit.classList.add('edit')
			edit.id = index

			todoContainer.appendChild(taskList)
			taskList.appendChild(task)
			task.appendChild(input)
			task.appendChild(item)

			task.appendChild(edit)
		})

		document.querySelectorAll('.edit').forEach(e => {
			e.addEventListener('click', editTodos)
		})
	} else {
		document.querySelector('.todo-container').innerHTML = ''
	}
}

const storeTodos = () => {
	let existingTodos = JSON.parse(localStorage.getItem('todos'))
	existingTodos = existingTodos === null ? [] : existingTodos

	const inputTodo = document.querySelector('#description').value
	const todo = new Todo(inputTodo, false, existingTodos.length + 1)

	existingTodos.push(todo)

	localStorage.setItem('todos', JSON.stringify(existingTodos))
	document.querySelector('#description').value = ''

	createTodos()
}

export { storeTodos, createTodos }
