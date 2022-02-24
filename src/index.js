import './style.css';
import * as todos from '../modules/crud.js';

document.querySelector('.enter').addEventListener('click', todos.storeTodos);

window.addEventListener('load', todos.createTodos);
