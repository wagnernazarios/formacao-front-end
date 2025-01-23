const button = document.querySelector('.btn');

const links = document.querySelector('.nav-links-mobile')


button.addEventListener('click', () => {
    links.classList.toggle('show-links')
})