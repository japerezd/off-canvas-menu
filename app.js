const menuButton = document.querySelector('#menu-button');
const container = document.querySelector('.container');
menuButton.addEventListener('click', () => {
    container.classList.toggle('active');
    console.log('d');
});