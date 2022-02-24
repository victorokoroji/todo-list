import './style.css';
import * as todos from './crud.js';

document.querySelector('#description').addEventListener('click', todos.storeTodos);

window.addEventListener('load', todos.createTodos);
