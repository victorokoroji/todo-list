import './style.css';
import todoUI from '../modules/todoUi.js';
import * as todos from '../modules/todos.js';

document.querySelector('.main').innerHTML = todoUI();

document.querySelector('.enter').addEventListener('click', todos.saveTodos);

window.addEventListener('load', todos.populateTodos);
