
const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim(); 

    if (todoText !== '') {
        const listItem = document.createElement('li');

        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        removeButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.appendChild(todoTextSpan);
        listItem.appendChild(removeButton);

        todoList.appendChild(listItem);

        todoInput.value = '';
    }
});
