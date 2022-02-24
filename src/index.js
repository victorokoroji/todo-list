import './style.css';
import * as todos from './CRUD.js';

document.querySelector('.enter').addEventListener('click', todos.storeTodos);

window.addEventListener('load', todos.createTodos);
