// let select = document.querySelector('a')
// console.log(select.dataset.href)
// let iframe = document.querySelector('iframe')
// console.log(iframe.getAttribute('src'))
// iframe.getAttribute('src') = select.dataset.href


let a = document.querySelectorAll('a[data-href]')
let iframe = document.querySelector('iframe')
for(let el of a){
    el.addEventListener('click', (event) => {
        console.log(event.target.dataset.href)
        iframe.src = event.target.dataset.href
        // iframe.setAttribute('src', event.target.dataset.href)
    })
}