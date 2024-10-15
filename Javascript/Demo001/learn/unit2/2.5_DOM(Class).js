
// let foo = document.getElementById('foo')
// console.log(foo.getAttribute('class'))
// console.log(foo.classList.item(1))
// foo.classList.remove('text-danger')
// foo.classList.add('text-primary')

let spoiler = document.querySelectorAll('.spoiler.mt-3')
for(let el of spoiler){
    el.querySelector('.btn-spoiler').addEventListener('click', (event) => {
        if(event.target.innerText){
            console.log(event.target.innerText)
            if(event.target.innerText == 'Show'){
                event.target.innerText = 'Hide'
            }else if(event.target.innerText == 'Hide'){
                event.target.innerText = 'Show'
            }
        }
        event.target.parentNode
        .querySelector('.text-spoiler')
        .classList.toggle('text-spoiler-show')
    })
}


