const title = document.querySelector('h1');
title.textContent = 'Title';
title.style.color = 'red';

const changeTextBtn = document.querySelector('#change-Txt-Btn');
const messageParagraph = document.querySelector('#message');

changeTextBtn.addEventListener('click', () => {
    messageParagraph.textContent = 'Paragraph has been successfully changed';
});

const counterDisplay = document.querySelector('#counter');
const counterDecrement = document.querySelector('#decrement');
const counterIncrement = document.querySelector('#increment');

let count = 0;

counterIncrement.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

counterDecrement.addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
});

const todoInput = document.querySelector('#txt-input');
const addTodoBtn = document.querySelector('#text-button');
const todoList = document.querySelector('#list');

addTodoBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim(); 

    if (taskText !== ''){
        const newLi = document.createElement('li');
        newLi.textContent = taskText;

        todoList.appendChild(newLi);
        todoInput.value = '';
    }
});