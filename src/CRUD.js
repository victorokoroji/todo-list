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

const editTodos = e => {
	const editInput = e.target
	const inputId = document.querySelector(`#complete-${editInput.id}`)
	console.log(inputId)
	inputId.removeAttribute('readonly')
	inputId.focus()

	const save = document.createElement('img')
	save.setAttribute('src', saveImg)
	save.classList.add(`save-${editInput.id}`)
	document.querySelector('.task').appendChild(save)

  let existingTodos = JSON.parse(localStorage.getItem('todos'))
  let saveEdit = document.querySelector(`.save-${editInput.id}`)
    saveEdit.addEventListener('click', () => {
			existingTodos[editInput.id].description = inputId.value
			localStorage.setItem('todos', JSON.stringify(existingTodos))
			saveEdit.remove()
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
			taskList.className += ` ${index}`
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

			const remove = document.createElement('img')
			remove.setAttribute('src', removeIcon)
			remove.id = index
			remove.classList.add('delete')

			todoContainer.appendChild(taskList)
			taskList.appendChild(task)
			task.appendChild(input)
			task.appendChild(item)

			task.appendChild(remove)
			task.appendChild(edit)
		})

		document.querySelectorAll('.edit').forEach(btn => {
			btn.addEventListener('click', () => {
				document.querySelectorAll('.tasks').forEach(task => {
					let myTask = task.className
					myTask = myTask.split(' ')
					let id = myTask[1]
					if (id === btn.id) {
						task.classList.toggle('active')
					}
				})
			})
		})

		document.querySelectorAll('.delete').forEach(e => {
			e.addEventListener('click', deleteTodos)
		})

		document.querySelectorAll('.edit').forEach(e => {
			e.addEventListener('click', editTodos)
		})
	} else {
		document.querySelector('.todo-container').innerHTML = ''
	}
}

const saveTodos = () => {
	let existingTodos = JSON.parse(localStorage.getItem('todos'))
	existingTodos = existingTodos === null ? [] : existingTodos

	const inputTodo = document.querySelector('#description').value
	const todo = new Todo(inputTodo, false, existingTodos.length + 1)

	existingTodos.push(todo)

	localStorage.setItem('todos', JSON.stringify(existingTodos))
	document.querySelector('#description').value = ''

	createTodos()
}

export { saveTodos, createTodos }
