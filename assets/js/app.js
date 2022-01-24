const burger = document.querySelector('.burger')
const listMenu = document.querySelector('.nav__list')

function openNav() {
    burger.addEventListener('click', () => {
        listMenu.classList.toggle('active')
    })
}

openNav()