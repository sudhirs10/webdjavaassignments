// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// select elements from HTML
const ul = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const input = document.querySelector('form input');

// function to create todo item
function createTodoItem(todo) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;

  const label = document.createElement('label');
  label.innerText = todo.task;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'X';

  // change completed value when checkbox is clicked
  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
    console.log(todoList);
  });

  // delete todo item
  deleteBtn.addEventListener('click', function () {
    const index = todoList.indexOf(todo);

    todoList.splice(index, 1);
    ul.removeChild(li);

    console.log(todoList);
  });

  // add elements inside li
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  // add li to ul
  ul.appendChild(li);
}

// display todo items
for (const todo of todoList) {
  createTodoItem(todo);
}

// open dialog
addBtn.addEventListener('click', function () {
  dialog.showModal();
});

// add new todo item
form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const newTodo = {
    id: todoList.length + 1,
    task: input.value,
    completed: false,
  };

  todoList.push(newTodo);

  createTodoItem(newTodo);

  console.log(todoList);

  input.value = '';

  dialog.close();
});
