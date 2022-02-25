import './style.css';
import * as todos from './crud.js';

document.querySelector('.enter').addEventListener('click', todos.storeTodos);
document.querySelector('form').addEventListener('submit', todos.storeTodos);
// document.querySelector('clear').addEventListener('submit', todos.deleteCompletedTodos);

window.addEventListener('load', todos.createTodos);
