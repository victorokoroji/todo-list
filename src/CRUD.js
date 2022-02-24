import dots from '../assets/images/dots.png'
import removeIcon from '../assets/images/delete.png'

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

const createTodos = () => {
	const existingTodos = JSON.parse(localStorage.getItem('todos'))
	if (existingTodos !== null && existingTodos.length > 0) {
		const todoContainer = document.querySelector('.todo-container')
		todoContainer.innerHTML = ''

		existingTodos.forEach((todo, index) => {
			const taskList = document.createElement('div')
			const task = document.createElement('div')
			const icons = document.createElement('div')

			taskList.classList.add('tasks')
			taskList.className += ` ${index}`
			task.classList.add('task')
			icons.classList.add('icons')

			const input = document.createElement('input')
			input.type = 'checkbox'
			input.classList.add('checkbox')
			input.id = 'complete'
			input.classList.add('.checkbox')

			const item = document.createElement('span')
			item.classList.add('item')

			const edit = document.createElement('img')
			edit.setAttribute('src', dots)
			edit.classList.add('edit')
			edit.id = index

			const remove = document.createElement('img')
			remove.setAttribute('src', removeIcon)
			remove.id = index

			item.innerHTML = todo.description

			todoContainer.appendChild(taskList)
			taskList.appendChild(task)
			taskList.appendChild(icons)
			icons.appendChild(remove)
			icons.appendChild(edit)
			task.appendChild(input)
			task.appendChild(item)
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
