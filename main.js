const darkMode = document.querySelector('.dark')
const colorMode = document.querySelector('.theme')
const switchingTheme= document.querySelector('.theme')
colorMode.addEventListener('click', function() {
    darkMode.classList.toggle('black')
    switchingTheme.classList.toggle('switcher')
    
})

let icon = document.querySelector(".dark")

icon.onclick = function () {
    document.body.classList.toggle('black')
}