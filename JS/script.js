const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

myButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    list.appendChild(newItem);

    newItem.classList.add('item');
    newItem.textContent = nameInput.value;

    nameInput.value = '';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'

    newItem.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(newItem);
    })

});
