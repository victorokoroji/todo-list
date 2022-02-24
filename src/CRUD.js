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
	const btnClass = removeBtn.className
	const btnId = btnClass.split('-')
	const id = parseInt(btnId[1], 10)
	let existingTodos = JSON.parse(localStorage.getItem('todos'))
	existingTodos = existingTodos.filter((todos, index) => index !== id)
	console.log(existingTodos)
	console.log(existingTodos.length)
	removeBtn.parentNode.remove()
	existingTodos.forEach((task, i) => (task.index = i + 1))
	localStorage.setItem('todos', JSON.stringify(existingTodos))
	createTodos()
}

const saveTodos = e => {
	const saveBtn = e.target
	const existingTodos = JSON.parse(localStorage.getItem('todos'))
	const btnClass = saveBtn.className
	const btnId = btnClass.split('-')
	const id = parseInt(btnId[1], 10)
	const taskList = document.querySelector(`#tasks-${id}`)
	const task = document.querySelector(`#task-${id}`)
	const saveEdit = document.querySelector(`.save-${id}`)
	const deleteEdit = document.querySelector(`.delete-${id}`)
	const inputId = document.querySelector(`#complete-${id}`)

	const edit = document.createElement('img')
	edit.setAttribute('src', dots)
	edit.classList.add('edit')
  task.appendChild(edit)


	existingTodos[id].description = inputId.value
	localStorage.setItem('todos', JSON.stringify(existingTodos))
	saveEdit.remove()
	deleteEdit.remove()
	taskList.classList.remove('active')
	inputId.setAttribute('readonly', true)
}

const editTodos = e => {
	const editInput = e.target
	const editBtn = document.getElementById(`${editInput.id}`)
	const inputId = document.querySelector(`#complete-${editInput.id}`)
	inputId.removeAttribute('readonly')
	inputId.focus()
	editBtn.remove()

	const taskList = document.querySelector(`#tasks-${editInput.id}`)
	taskList.classList.add('active')

	const task = document.querySelector(`#task-${editInput.id}`)

	const save = document.createElement('img')
	save.setAttribute('src', saveImg)
	save.classList.add(`save-${editInput.id}`)
	task.appendChild(save)

	const removeBtn = document.createElement('img')
	removeBtn.classList.add(`delete-${editInput.id}`)
	removeBtn.setAttribute('src', removeIcon)
	task.appendChild(removeBtn)

	document.querySelectorAll(`.delete-${editInput.id}`).forEach(e => {
		e.addEventListener('click', deleteTodos)
	})

	document.querySelectorAll(`.save-${editInput.id}`).forEach(e => {
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
			task.id = `task-${index}`

			const input = document.createElement('input')
			input.type = 'checkbox'
			input.classList.add('checkbox')

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

	if (inputTodo !== '') {
		existingTodos.push(todo)
		localStorage.setItem('todos', JSON.stringify(existingTodos))
		document.querySelector('#description').value = ''
		createTodos()
	}
}

export { storeTodos, createTodos, editTodos, saveTodos }
