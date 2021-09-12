const navButton = document.querySelector('.nav-button')
const mobileNav = document.querySelector('.mobile-nav')

navButton.addEventListener('click', (event) => {
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active')
    navButton.classList.toggle('nav-button-close')
})

//Click outside mobile navigation menu
window.addEventListener('click', () => {
    if (navButton.classList.contains('nav-button-close'))
    {
        mobileNav.classList.toggle('mobile-nav-active')
        navButton.classList.toggle('nav-button-close')
    }
})
mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})

//Scroll
window.addEventListener('scroll', (event) => {
    if (!navButton.classList.contains('nav-button-close'))
    {
        event.stopPropagation();
    }
})

