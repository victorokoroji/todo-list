import './style.css';
import * as todos from './crud.js';

document.querySelector('.enter').addEventListener('click', todos.storeTodos);
document.querySelector('form').addEventListener('submit', todos.storeTodos);
document.querySelector('button').addEventListener('click', todos.clearCompletedTodos);

window.addEventListener('load', todos.createTodos);
