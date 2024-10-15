"use strict";

// let text = document.querySelector('input[type="text"]')
// let checkbox = document.querySelector('input[type="checkbox"]')
// let form = document.querySelector('form')

// console.log(text.type, text.getAttribute('type'))
// console.log(text.name, text.getAttribute('name'))
// console.log(text.value, text.getAttribute('value'))
// console.log(text.required, text.getAttribute('required'))
// console.log(text.maxLength, text.getAttribute('maxlength'))

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(text.value)
// })

// checkbox.addEventListener('input', (event) =>{
//     if(text.required){
//         text.removeAttribute('required')
//     }else{
//         text.setAttribute('required','')
//     }
    
// })

//-------------workshop------------------------------
// let links = document.querySelectorAll('a');
// links.forEach(link => {
//     link.addEventListener('click', (event) => {
//         // event.preventDefault(); // Prevents the default action of the link (optional)
//         if(link.href){
//             console.log(link.href)
//             link.setAttribute('target','_blank')
//         }
//     });
// });

//-------------------------------------------
let a = document.links
console.log(a)
for(let el of a){
    el.setAttribute('target','_blank')
}
