import './index.css';

const input = document.querySelector('input');
const submitBtn = document.querySelector('#submit');
const clearBtn = document.querySelector('#clear');
const nameContainer = document.querySelector('.name');

const displayName = () => {
    nameContainer.textContent = localStorage.getItem('name') ? localStorage.getItem('name'): '';
    input.value = ''; 
}

// when loads initially, set name from localstorage
displayName();

const handleClick = () => {
    localStorage.setItem('name', input.value);
    displayName();
}

const handleClear = () => {
    nameContainer.textContent = '';
    localStorage.removeItem('name');
    // localStorage.clear();
}

submitBtn.addEventListener('click', handleClick);
clearBtn.addEventListener('click', handleClear);