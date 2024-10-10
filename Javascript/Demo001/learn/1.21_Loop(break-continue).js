//#############1.21 Loop break continue################################
// while(true){
//     let name = prompt('Name')
//     if(name){
//         alert(name)
//         break //exit
//     }
// }

// let set = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// for(let n of set){
//     if(n % 2 != 0){
//         continue //skip
//     }
//     console.log(n)
// }

//########workshop##############
// let people = []
// let outputSting = ''
// while(true){
//     let menuText = 'Please select menu\n\n1. Add\n2. Exit'
//     let menuSelect = prompt(menuText)
//     if(menuSelect == 1){
//         people.push(prompt(`Name:`))
//     }else if (menuSelect == 2){
//         for(let user of people){
//             outputSting += `- ${user}\n`
//         }
//         alert(outputSting)
//         break
//     }else{
//         alert('Error!')
//         break
//     }

// }