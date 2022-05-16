const nav = document.querySelector('.main-navigation')
const logo = document.querySelector('.logo ')
const headerContainer = document.querySelector('.header__container ')
const burgerBtn = document.querySelector('.burger-button')

const blackout = document.createElement('div')
blackout.className = 'blackout'

const checkBurger = () => {
    if (document.body.clientWidth < 768) {
        nav.classList.add('burger')
    } else {
        nav.classList.remove('burger')
    }
}
checkBurger()
window.addEventListener("resize", checkBurger, true);

const toggleBurger = () => {
    if (nav.classList.contains('burger--active')) {
        nav.classList.remove('burger--active')
        blackout.remove()
        burgerBtn.style.transform = 'rotate(0deg)'
        document.body.style.overflow = 'auto'
        headerContainer.style.justifyContent = 'space-between'
        logo.classList.remove('header__logo--burger')
        burgerBtn.classList.remove('header__burger--primary-color')
    } else {
        nav.classList.add('burger--active')
        nav.before(blackout)
        burgerBtn.style.transform = 'rotate(-90deg)'
        document.body.style.overflow = 'hidden'
        headerContainer.style.justifyContent = 'flex-end'
        logo.classList.add('header__logo--burger')
        burgerBtn.classList.add('header__burger--primary-color')
    }
}

burgerBtn.addEventListener('click', toggleBurger)
blackout.addEventListener('click', toggleBurger)
document.querySelectorAll('.main-navigation__link').forEach(elem => {
    if (nav.classList.contains('burger')) {
        elem.addEventListener('click', toggleBurger)
    }
})
