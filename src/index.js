import './style.css';
import * as todos from '../modules/todos.js';

document.querySelector('.enter').addEventListener('click', todos.saveTodos);

window.addEventListener('load', todos.populateTodos);
