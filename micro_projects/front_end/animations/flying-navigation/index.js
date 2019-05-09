const navigateButton = document.querySelector('button')
const body = document.querySelector('body')
const cover = document.querySelector('.cover')

navigateButton.addEventListener('click', event => {
    cover.classList.remove('hidden')
    body.style.backgroundSize = '200%'
    setTimeout(() => {
        cover.style.opacity = '1'
        setTimeout(() => location.href = 'page2.html', 3000)
    }, 0)
})

window.addEventListener('DOMContentLoaded', event => {
    body.style.backgroundSize = '100%'
    setTimeout(() => {
        cover.style.opacity = '0'
        setTimeout(() => {
            cover.classList.add('hidden')
            navigateButton.classList.remove('hidden')
        }, 3000)
    }, 0);


})