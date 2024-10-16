'use strict'

let str1 = 'abcdef'
let str2 = '          Est ut irure proident id deserunt'
let str3 = 'http://www.httpsblahcomblah.org/'
let str4 = 'i love cat and cat i my love'
let ids = [1, 2, 305, 20964]
// for(let char of str1){
// console.log(char)
// }

//แปลงข้อมูลเพิ่ม000 ตามจำนวน
// for(let id of ids){
// console.log(String(id).padStart(5,'0'))
// console.log(String(id).padEnd(5,'0'))
// }

//ตัดข้อความ
// console.log(str4.slice(2,6))
// console.log(str4.slice(7))
// console.log(str4.slice(-7))
// console.log(str4.slice(-7, -5))

//เอาเว้นวรรคออก ด้านหน้าด้านหลัง
// console.log(str2.trim())
// let p = document.querySelector('p')
// console.log(p.textContent.trim())

//ทำข้อความซ้ำๆ
console.log(str1.repeat(5))

//แบ่งข้อความ
console.log(str1.split(''))
let query = 'name=john&age=18&grade=3.5'
for(let q of query.split('&')){
    console.log(q.split('='))
}


// console.log(str1.length)
// console.log(str2.length)

// console.log(str1.charAt(0)) //เอาอักษรตัวที่0
// console.log(str1[0]) //เอาอักษรตัวที่0
// console.log(str2.charAt(5)) //เอาอักษรตัวที่0
// console.log(str2[5]) //เอาอักษรตัวที่0

// console.log(str1.toLocaleLowerCase()) //ตัวพิมพ์เล็ก
// console.log(str2.toUpperCase()) //ตัวพิมพ์ใหญ่

//ค้นหาข้อความว่ามีอยู่จริงหรือไม่
// console.log(str1.includes('e'))
// console.log(str1.includes('def'))
// console.log(str2.includes('ded'))
// console.log(str1.indexOf('def')) //บอกตำแหน่งข้อมูลที่เจอ
// console.log(str2.indexOf('ded')) //-1 ไม่เจอข้อมูล



// console.log(str3.includes('https'))

// console.log(str3.startsWith('https'))
// console.log(str3.endsWith('com'))

// let input = '1234'
// let password = '1283 123 556 1234 1612'
// console.log(password == input)
// console.log(password.includes(input))

// console.log(str2.replace('i', 'I')) 
// console.log(str2.replace(/i/g, 'I')) //แทนที่ตัว i ทั้งหมด

// console.log(str4.replace(/cat/g, 'DOG')) //แทนที่ตัว i ทั้งหมด



