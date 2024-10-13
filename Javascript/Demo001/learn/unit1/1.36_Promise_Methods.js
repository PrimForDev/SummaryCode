'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

function getData (url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(reponse => reponse.json())
        .then(resolve)
        .catch(reject)
    })
}
let url = [
    getData('https://reqres.in/api/users/1?delay=1'),
    getData('https://reqres.in/api/users/2?delay=3'),
    getData('erjjfjgooofofo'),
    getData('https://reqres.in/api/users/4?delay=2')
]
async function run() {
    // let result1 = await url[0]
    // let result2 = await url[1]
    // let result3 = await url[2]
    // let result4 = await url[3]
    // console.log(result1, result2, result3, result4)
    //or
    // let result = await Promise.all(url) // รอทั้งหมด ทุกชิ้นต้องสำเร็จ
    // console.log(result)
    // let result = await Promise.race(url) //เอาชิ้นแรกที่ run เสร็จ ทุกชิ้นต้องสำเร็จ
    // console.log(result)
    let result = await Promise.any(url) //เอาชิ้นแรกที่ run เสร็จ ทุกชิ้นไม่ต้องสำเร็จก็ได้ ส่งstatusมา
    console.log(result)

    // let result = await Promise.allSettled(url) //รอทั้งหมด ทุกชิ้นไม่ต้องสำเร็จก็ได้ ส่งstatusมา
    // console.log(result)



}
run()