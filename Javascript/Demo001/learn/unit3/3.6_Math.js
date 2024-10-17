// let r = 3
// console.log((22/7)*(r**2))
// console.log(Math.PI * (r**2))
// console.log(Math.max(2,1,3,4))
// let data = [2,1,3,4]
// console.log(Math.min(...data))

// let a = 10
// let b = -10

// console.log(Math.abs(a)) //แปลงเป็นค่าบวกเท่านั้น
// console.log(Math.abs(b))

//----------------------------------------------
// let a = 3.1
// let b = 3.5
// let c = 3.9
// console.log(a.toFixed(0)) //ปัดทศนิยม มากกว่า0.5 ปัดขึ้น น้อยกว่า 0.5 ปัดลง
// console.log(b.toFixed(0))
// console.log(c.toFixed(0))
// console.log(Math.floor(a)) //ปัดลงทุกกรณี
// console.log(Math.floor(b))
// console.log(Math.floor(c))
// console.log(Math.ceil(a)) //ปัดขึ้นทุกกรณี
// console.log(Math.ceil(b))
// console.log(Math.ceil(c))
// console.log(Math.trunc(a)) //ตัดทศนิยมทั้ง
// console.log(Math.trunc(b))
// console.log(Math.trunc(c))
// //f
// function random1(min, max){
//     return Math.random() * (max - min) + min;
// }
// //i
// function random2(min, max){
//     return Math.floor(Math.random() * (max - min) + min);
// }
// //2-12
// console.log(random1(2, 12))
// console.log(random1(2, 12))
// console.log(random1(2, 12))
// console.log(random2(2, 12))
// console.log(random2(2, 12))
// console.log(random2(2, 12))

let maxRandom = 1000
function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

let lotteries = []
for(let c=0; c<maxRandom; c++){
    let lottery
    do{
        lottery = String(random(0, 999999)).padStart(6, '0')
    }while(lotteries.includes(lottery))
    lotteries.push(lottery)
}
// let repeat = 0
// for(let item of lotteries){
//     let originIndex = lotteries.indexOf(item)
//     if(lotteries.includes(item, originIndex + 1)){
//         repeat++
//     }
// }
// console.log('สรุปซ้ำกันทั้งหมด', repeat)
let p = document.querySelector('p')
p.innerText = lotteries.sort().join(',')