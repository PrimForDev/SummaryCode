let button = document.querySelector('button')
let content = document.querySelector('.content')

button.addEventListener('click', () => {
    console.log('clientHeight',content.clientHeight)
    console.log('clientWidth', content.clientWidth)
    console.log('offsetWidth', content.offsetWidth)
    console.log('scrollHeight', content.scrollHeight)
    console.log('scrollTop', content.scrollTop)
})