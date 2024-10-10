//#############1.20 Loop Nested ลูปซ้อนลูป####################
// let game = [
//     ['O','O','X'],
//     ['X','X','O'],
//     ['O','X','O']
// ]

// console.log(game)
// console.log(`${game[0][0]} ${game[0][1]} ${game[0][2]}`)
// console.log(`${game[1][0]} ${game[1][1]} ${game[1][2]}`)
// console.log(`${game[2][0]} ${game[2][1]} ${game[2][2]}`)

// let outputString = ''

// for(let row of game){
//     // console.log(row)
//     let rowString = ''
//     for(let field of row){
//         // console.log(field)
//         rowString += field + ' '
//     }
//     console.log(rowString)
//     outputString += rowString + '\n'
// }

// let rowCount = 5
// let outputString = ''

// for(let row = 1; row <= rowCount; row++){
//     let rowString = ''
//     for(let star = 1; star <= row; star++){
//         rowString += '* '
//     }
//     outputString += rowString + '\n'
// }
// console.log(outputString)


// let rowCount = 5
// let outputString = ''

// for(let row = 1; row <= rowCount; row++){
//     let rowString = ''
//     for(let dash = rowCount; dash > row; dash--){
//         rowString += '- '
//     }
//     for(let star = 1; star <= row; star++){
//         rowString += '* '
//     }
//     outputString += rowString + '\n'
// }
// console.log(outputString)