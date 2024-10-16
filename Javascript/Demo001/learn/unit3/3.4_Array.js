// let a = [1, 2, 3]
// let b = {a:1, b:2}
// let c = 'string'

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)

// console.log(Array.isArray(a))
// console.log(Array.isArray(b))
// console.log(Array.isArray(c))

// console.log(a.length)
// console.log(c.length)

//------------------------------------------
// let a = [1, 2, 3, 4, 5]
// alert(a)
// console.log(a)
//-------------------------------------------
// let a = [1, 2, 3, 4, 5]
// let b = [6, 7, 8, 9, 10]

// console.log([a,b])
// console.log([...a,...b])
// console.log(a.concat(b))

// let key=0
// for(let value of a){
//     console.log(`${key++} = ${value}`)
// }

// function handle(value, key){
//     console.log(`${key} = ${value}`)
// }
// a.forEach(handle)

//------------------------------------------
// let a = ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(a)
// a.push('d', 'e', 'f') //เพิ่มด้านหลัง
// a.unshift('d', 'e', 'f') //เพิ่มด้านหน้า
// let removed1 = a.pop() //นำข้อมูลท้ายสุดออก
// let removed2 = a.shift() //นำข้อมูลหน้าสุดออก
// let left = a.slice(0, 3) //ตัดตั้งแต่ตัว0-3 > ไม่มีการเปลี่ยนแปลงข้อมูลหลัก //ตำแหน่งเริ่มต้น - ตำแหน่งที่จบ
// let left = a.splice(0, 2) //ตำแหน่งเริ่มต้น - จำนวน > มีการเปลี่ยนแปลงข้อมูลหลัก
// console.log(a)
// console.log(removed1)
// console.log(removed2)
// console.log(left)
//----------------------------------------------
// let a = ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(a.toString())
// console.log(a.join(''))
// console.log(a.join(';'))
// console.log(a.join('\n'))
// console.log(a.includes('d'))
// console.log(a.includes('e'))
// console.log(a.includes('z'))
// console.log(a.indexOf('d'))
// console.log(a.indexOf('e'))
// console.log(a.indexOf('z'))
//-----------------------------------------------
// let a = [2000, 500, 1000, 1500, 900, 800, 2500]
// let b = ['John', 'James', 'Jane', 'Joe', 'Anny', 'Zebra', 'House', 123 ,1234]

// function moreThan1000 (value){
//     return value>1000
// }
// function stringLength3 (value){
//     return value.length === 3
// }
// console.log(a)
// console.log(a.find(moreThan1000)) //เอามาแค่ตัวแรกตัวเดียว
// // console.log(b.find(stringLength3))
// console.log(b.find(value => value.length === 3))

// console.log(a.filter(moreThan1000)) //เอามาทุกตัว
// // console.log(b.filter(stringLength3))
// console.log(b.filter(value => value.length === 5))

// console.log(a.some(moreThan1000)) //or
// // console.log(b.some(stringLength3)) //or
// console.log(b.some(value => value.length === 5)) //or

// console.log(a.every(moreThan1000)) //and
// console.log(a.every(value => value >= 500)) //and
// // console.log(b.every(stringLength3)) //and
// console.log(b.every(value => value.length === 5)) //and
// console.log(b.every(value => typeof value === 'string')) //and

// console.log(a.map(value => value*100)) //แปลงข้อมมูล
// console.log(a.map(value => value.toLocaleString('th-TH', {style: 'unit', unit: 'kilogram'})))

//-----------------------------------------------
// let c = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(c.flat()) //รวม array หลายมิติเป็นมิติเดียว
//-----------------------------------------------
// let c = [9, 1, 5, 3, 4, 8, 7, 2, 6]
// let d = ['John','James','Joe','Jame','Jimmy','Anny']
// console.log(c.sort()) //เรียงข้อมูลน้อยไปมาก
// console.log(d.sort())
// console.log(c.sort().reverse()) //เรียงข้อมูลมากไปน้อยกลับทาง
// console.log(d.sort().reverse())


//ลดจำนวนทั้งหมดให้เหลือชิ้นเดียว ไม่ว่าจะ array หรือ string
// function sumAll (previous, current){
//  return previous + current
// }
// console.log(c.reduce(sumAll, 0))
// console.log(a.reduce(sumAll, 0))

//------workshop--------------------------------------
let people = [
    ['John','Doe'],
    ['Joe', 'Dan'],
    ['Tim','Bus'],
    ['Bun','Dust']
]

function handle(value){
    return { 
        firstname: value[0],
        lastname: value[1]
    }
    // let [firstname, lastname] = value
    // return {firstname, lastname}
}
console.log(people.map(handle)) //แปลงข้อมมูล







