import dots from './assets/images/dots.png';

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const populateTodos = () => {
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  if (existingTodos !== null && existingTodos.length > 0) {
    const todoContainer = document.querySelector('.todo-container');
    todoContainer.innerHTML = '';

    existingTodos.forEach((todo, index) => {
      const taskList = document.createElement('div');
      const task = document.createElement('div');

      taskList.classList.add('tasks');
      task.classList.add('task');

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.classList.add('checkbox');
      input.id = 'complete';
      input.classList.add('.checkbox');

      const item = document.createElement('span');
      item.classList.add('item');

      const edit = document.createElement('img');
      edit.setAttribute('src', dots);
      edit.id = index;

      item.innerHTML = todo.description;

      todoContainer.appendChild(taskList);
      taskList.appendChild(task);
      taskList.appendChild(edit);
      task.appendChild(input);
      task.appendChild(item);
    });
  } else {
    document.querySelector('.todo-container').innerHTML = '';
  }
};

const saveTodos = () => {
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos = existingTodos === null ? [] : existingTodos;

  const inputTodo = document.querySelector('#description').value;
  const todo = new Todo(inputTodo, false, existingTodos.length + 1);

  existingTodos.push(todo);

  localStorage.setItem('todos', JSON.stringify(existingTodos));
  document.querySelector('#description').value = '';

  populateTodos();
};

export { saveTodos, populateTodos };
