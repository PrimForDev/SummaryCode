// let inside = document.getElementById('inside')
// console.log(inside.parentNode.parentNode)//ข้างนอก
// console.log(inside.parentElement.parentElement) //ข้างนอก


// let outside = document.getElementById('outside')
// console.log(outside.children)
// outside.addEventListener('click', () => {
//     let div = document.createElement('div')
//     div.classList.add('inside')
//     div.style.backgroundColor = 'red'
//     // <div class="inside"></div>
//     outside.append(div) //ต่อด้านหลัง
//     // outside.prepend(div)//ต่อด้านหน้า
// })
// outside.addEventListener('contextmenu', (event) => {
//     event.preventDefault()
//     let div = outside.querySelector('div.inside:last-child')
//     if(div){
//         div.remove()
//     }
        
// })

let list = document.getElementById('list')
let todo = document.getElementById('todo')

todo.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = event.target.querySelector('input')
    let li = document.createElement('li')
    let label = document.createElement('label')
    
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('input', (event) => {
        console.log(event.target.checked)
        let parent = event.target.parentElement.parentElement
        parent.classList.toggle('dash')
    })
    label.innerText = input.value
    label.prepend(checkbox)
    li.append(label)
    
    let a = document.createElement('a')
    a.innerText = 'Delete'
    a.href = '#'
    a.addEventListener('click', (event) => {
        let parent = event.target.parentElement
        parent.remove()
    })

    li.append(a)

    list.append(li)
    input.value = ''
})
