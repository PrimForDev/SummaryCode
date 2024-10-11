'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

// let date = new Date('2022-01-31')
// let dayName = [
//     'อาทิตย์',
//     'จันทร์',
//     'อังคาร',
//     'พุธ',
//     'พฤหัส',
//     'ศุกร์',
//     'เสาร์'
// ]
// console.log(dayName[date.getDay()])
//ถ้าเป็น arrow function จะไม่สามารถใช้งานกับ prototype ได้
Date.prototype.getDayName = function(lang) {
    let dayName
    if(lang == 'th'){
        dayName = [
            'อาทิตย์',
            'จันทร์',
            'อังคาร',
            'พุธ',
            'พฤหัส',
            'ศุกร์',
            'เสาร์'
        ]
    }else if(lang == 'en'){
        dayName = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]
    }
    return dayName[this.getDay()]
}
let date1 = new Date('2022-01-30')
console.log(date1.getDay())
console.log(date1.getDayName('th'))

let date2 = new Date('2022-01-29')
console.log(date2.getDay())
console.log(date2.getDayName('en'))