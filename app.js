const ToggleButton = document.querySelector(".toggle-button")
const NavbarMenu = document.querySelector(".navbar-menu")

ToggleButton.addEventListener('click', () => {
    NavbarMenu.classList.toggle('active')
})