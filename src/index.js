import './style.css'
import todoUI from './todoUi'
import * as todos from './todos'

document.querySelector('.main').innerHTML = todoUI()

document.querySelectorAll('.checkbox').forEach(checkbox => {
	checkbox.onclick = function () {
		console.log(this.parentNode.childNodes[3].classList.toggle('completed'))
	}
})

document.querySelector('.enter').addEventListener('click', todos.saveTodos)
