import './style.css';
import todoUI from './todoUi.js';
import * as todos from './todos.js';

document.querySelector('.main').innerHTML = todoUI();

document.querySelector('.enter').addEventListener('click', todos.saveTodos);

window.addEventListener('load', todos.populateTodos);
