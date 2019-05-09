window.addEventListener('DOMContentLoaded', main)

function main() {
    const domNodes = {
        header: document.querySelector('header'),
        nav: document.querySelector('nav'),
        main: document.querySelector('main'),
        button: document.querySelector('button')
    }

    setTimeout(() => {
        domNodes.header.style.top = '0'
        domNodes.nav.style.left = '0'
        domNodes.main.style.right = '0'
    }, 0)

    domNodes.button.addEventListener('click', event => {
        console.log('clicked');

        setTimeout(() => {
            domNodes.header.style.top = '-20vh'
            domNodes.nav.style.left = '-20vw'
            domNodes.main.style.right = '-80vw',
                setTimeout(() => navigateTo('index.html'), 5000)
        }, 0)
    })
}

function navigateTo(location) {
    window.location.href = location
}