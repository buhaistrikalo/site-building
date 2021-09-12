const navButton = document.querySelector('.nav-button')
const mobileNav = document.querySelector('.mobile-nav')

navButton.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav-active')
    navButton.classList.toggle('nav-button-close')
})