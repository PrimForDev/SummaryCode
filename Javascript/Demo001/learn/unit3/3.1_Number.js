'use strict'
// document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

// let a = 10
// let b = 'string'
// let c = 5.712554563225465
// console.log(a, b)
// console.log(c.toFixed(2)) //แปลงเป็นทศนิยม2ตำแหน่ง แต่ข้อมูลจะเป็น string
// console.log(Number(c.toFixed(2))) //แปลงเป็นทศนิยม2ตำแหน่ง แต่ข้อมูลจะเป็น string

// let result1 = Number(a)
// let result2 = Number(b)
// // let result1 = +a // แปลงเป็น numberได้เหมือนกัน
// // let result2 = +b
// console.log(Number.isNaN(result1))
// console.log(Number.isNaN(result2)) //เป็น NaN ไหม

// let result1 = pauseInt(a) //แปลงเป็น จำนวนเต็ม
// let result2 = pauseInt(b)
// let result1 = pauseFloat(a) //แปลงเป็น จำนวนทศนิยม
// let result2 = pauseFloat(b)

// let result3 = 10/0
// console.log(Number.isFinite(result3)) //เป็นค่าที่ใช้งานได้ไหม

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(NaN, Number.NaN)

// let d = 144245221
// console.log(d.toLocaleString('th-TH'))
// console.log(d.toLocaleString())
// let options = {}
// console.log(d.toLocaleString('th-TH', options))
// console.log(d.toLocaleString('th-TH-u-nu-thai', options))

// //สกุลเงิน(currency)
// console.log(d.toLocaleString('th-TH', {
//     style: 'currency',
//     currency: 'THB',
//     currencyDisplay: 'name'
// }))
// console.log(d.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     currencyDisplay: 'narrowSymbol'
// }))

// console.log(d.toLocaleString('th-TH', {
//     style: 'unit',
//     unit: 'centimeter',
//     unitDisplay: 'long'
// }))
// console.log(d.toLocaleString('en-US', {
//     style: 'unit',
//     unit: 'centimeter',
//     unitDisplay: 'short'
// }))
let exchange = 0
async function getCurrency() {
     let res = await fetch('http://api.frankfurter.app/latest?from=USD&to=THB')
     let data = await res.json()
     exchange = data.rates.THB
     console.log(exchange)
}
getCurrency()

let convert = document.getElementById('convert');
let input = document.getElementById('currencyInput');
let span = document.querySelector('p span');
convert.addEventListener('input', (event) => {
event.preventDefault(); // Prevents form from submitting and reloading the page

  // Declare and assign value to `x`
  let x = Number(input.value); // Convert input value to a number
  if (isNaN(x) || x <= 0) {
    span.innerHTML = 'Please enter a valid number'; // Input validation
    return;
  }
  let y = exchange * x; // Convert USD to Thai Baht
  // Update the span with formatted output
  span.innerHTML = `${x.toLocaleString('th-TH', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'name'
  })} = ${y.toLocaleString('th-TH', {
    style: 'currency',
    currency: 'THB',
    currencyDisplay: 'name'
  })}`;
});