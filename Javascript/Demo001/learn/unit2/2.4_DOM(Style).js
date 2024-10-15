let avatar = document.getElementById('avatar')

let color = document.querySelector('input[name="color"]')
let bgColor = document.querySelector('input[name="bgColor"]')
let text = document.querySelector('input[name="text"]')
let font = document.querySelector('input[name="font"]')
let fontSize = document.querySelector('input[name="fontSize"]')

color.addEventListener('input', (event) => {
    console.log(event.target.value)
    avatar.style.color = event.target.value
})
bgColor.addEventListener('input', (event) => {
    console.log(event.target.value)
    avatar.style.backgroundColor = event.target.value
})
text.addEventListener('input', (event) => {
    console.log(event.target.value)
    avatar.innerText = event.target.value
})
font.addEventListener('input', (event) => {
    console.log(event.target.value)
    avatar.style.fontFamily = event.target.value
})
fontSize.addEventListener('input', (event) => {
    console.log(event.target.value)
    avatar.style.fontSize= event.target.value + 'px'
})