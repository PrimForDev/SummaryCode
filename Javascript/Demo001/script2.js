'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'
let rowCount = 5
let outputString = ''

for(let row = 1; row <= rowCount; row++){
    let rowString = ''
    for(let dash = rowCount; dash > row; dash--){
        rowString += '- '
    }
    for(let star = 1; star <= row; star++){
        rowString += '* '
    }
    outputString += rowString + '\n'
}
console.log(outputString)