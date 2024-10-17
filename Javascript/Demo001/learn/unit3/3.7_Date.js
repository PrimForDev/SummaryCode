// // console.log(new Date())
// // console.log(new Date('2000-12-30'))
// // console.log(new Date('2000-12-30T09:30:01'))
// // console.log(Date.now() / 1000/ 60/ 60/ 24/ 365)

// let d = new Date()
// console.log(d.toString())

// d.setFullYear(2021)
// d.setHours(1)

// console.log(d.valueOf())
// console.log(Number(d))
// console.log(+d)

// console.log(d)
// console.log(d.getDate())
// console.log(d.getMonth()) //0-11
// console.log(d.getFullYear())

// console.log(d.getTime())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())

// console.log(d.toLocaleString('th-TH', {
//     dateStyle: 'full',
//     timeStyle: 'full',
//     calendar: 'iso8601',
//     timeZone: 'Asia/Shanghai'
// }))
// console.log(d.toLocaleString('en-US'))

//-----------------------------------------------------------
// let input1 = document.getElementById('date1')
// let input2 = document.getElementById('date2')
// input1.addEventListener('change', calculateDifference)
// input2.addEventListener('change', calculateDifference)

// function calculateDifference() {
//     let date1 = new Date(input1.value);
//     let date2 = new Date(input2.value);
    
//     if (!isNaN(date1) && !isNaN(date2)) {
//         let diffTime = Math.abs(date2 - date1);
//         let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//         document.getElementById('result').textContent = diffDays;
//     }
// }
//-----------------------------------------------------------
let date1 = document.getElementById('date1')
let date2 = document.getElementById('date2')
let result = document.getElementById('result')
let dates = [0, 0]

let getResult = () => {
    if(dates.every(v => v > 0)){
        let diff = Math.abs(dates[0] - dates[1])
        let diffDate = diff / (1000 * 60 * 60 * 24)
        result.innerText = diffDate
    }
}
let onDateInput = (index) => {
    return (event) => {
        let date = new Date(event.target.value)
        dates[index] = +date
        getResult()
    }
}
date1.addEventListener('input',onDateInput(0))
date2.addEventListener('input',onDateInput(1))
