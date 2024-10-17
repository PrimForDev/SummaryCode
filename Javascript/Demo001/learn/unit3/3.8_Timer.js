// function tellTime (){
//     console.log(new Date())
// }
// setTimeout(tellTime, 1000)
// setTimeout(tellTime, 2000)
// setTimeout(tellTime, 3000)
// setTimeout(tellTime, 4000)
// setTimeout(tellTime, 5000)

// let clock = setInterval(tellTime, 1000) //ทำทุกๆ 1 วินาที
// setTimeout(() => {
//     clearInterval(clock) // clear ตัวที่เคยรันทิ้งไว้
// }, 10000)


//------------------------------------------
let step = 'red'
let div = document.querySelector('div')
let refTime
let awaitScene
function makeScene(color, text, customStep = ''){
    document.body.removeAttribute('class')
    document.body.classList.add(color)
    div.innerText = text
    step = customStep || color
}
function switchToGreen (){
    document.body.removeAttribute('class')
    makeScene('green', 'คลิกเลย')
    refTime = new Date()
}
function switchToYellew (){
    document.body.removeAttribute('class')
    makeScene('yellow', 'รอให้เป็นสีเขียวแล้วคลิกอีกรอบ')
    let randomTime = _.random(2000, 5000)
    awaitScene = setTimeout(switchToGreen, randomTime)
}
function switchToRed (isError = false){
    document.body.removeAttribute('class')
    let text ='คลิก เพื่อเตรียมตัว'
    if(isError){
        clearTimeout(awaitScene)
        text += '\n(กรุณารอให้เป็นสีเขียวก่อน)'
    }
    makeScene('red', text)

}
function switchToResult (){
    let hitTime = new Date()
    let diffTime = +hitTime - +refTime
    let text = `คุณตอบสนองได้เร็วถึง\n${diffTime} มิลลิวินาที (ms)`
    makeScene('green', text, 'done')
}
document.addEventListener('click', () => {
    if(step === 'red'){
        switchToYellew ()
    }
    else if(step === 'yellow'){
        switchToRed(true)
    }else if(step === 'green'){
        switchToResult ()
    }else if (step === 'done'){
        switchToRed()
    }
})