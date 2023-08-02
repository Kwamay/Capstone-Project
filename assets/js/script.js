const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    document.querySelector('.mobile').classList.toggle('show');
});

const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
    document.querySelector('.mobile').classList.toggle('show');
});