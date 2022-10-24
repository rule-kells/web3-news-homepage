const navToggle = document.querySelector('.nav__toggle')
const headerNav = document.querySelector('.header__nav')
const navList = document.querySelector('.nav__list')

navToggle.addEventListener('click', _ => {
    headerNav.classList.toggle('active')
})