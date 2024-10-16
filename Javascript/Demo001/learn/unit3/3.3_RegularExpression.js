/* 
Expression Flags
https://regexr.com/
- global ==> g
- case insensitive ==> i
- multiline 
- single line (dotall) 
- unicode 
- sticky 
- /\w/gi :ตัวหนังสือ ข้อความ
- /\d/gi :ตัวเลข
- /\s/gi :ตัวเว้นวรรค
- /\W/gi :เลือกทุกตรงยกเว้นตัวหนังสือ ข้อความ
- /\D/gi :เลือกทุกตรงยกเว้นตัวเลข
- /\S/gi :เลือกทุกตรงยกเว้นตัวเว้นวรรค
- /^\S$/gi :เรื่องต้นหรือลงท้ายเ็นอะไรก็ได้ที่ไม่ใช่เว้นวรรค
- /./g :เอาทุกตัวรวมเว้นวรรค
- /^\S$/gim :ในบรรทัดนั้นต้องเป็นตัวอะไรก็ได้ที่ไม่มีเว้นวรรคแม้แต่ตัวเดียว (ทั้งบรรทัดต้องมีข้อความเดียว)
- /^\S\S$/gim :ในบรรทัดนั้นต้องเป็นตัวอะไรก็ได้ที่ไม่มีเว้นวรรคแม้แต่ตัวเดียว (ทั้งบรรทัดต้องมีข้อความ2ข้อความ)
- a* :มี0ชิ้นหรือมากกว่านี้ก็ได้
- a+ :ต้องมี1ชึ้นหรือมากกว่าก็ได้
- a? :มี1ชิ้นเท่านั้น หรือไม่มี
- /^\S+$/gim ทั้งบรรทัด ต้องมีเนื้อหาที่ไม่เว้นบรรทัด

ABC-001
PRO-105
PRO-999
ADM-689

abc-012
!@#-002
ABC-ABC
/^[A-Z]{3}-[0-9]{3}$/gm
*/

// let form = document.querySelector('form')
// let input = document.querySelector('input')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     // let regex = new RegExp('^[A-Z]{3}-[0-9]{3}$')
//     // let regex = /^[A-Z]{3}-[0-9]{3}$/
//     let phone = /^\d{3}-\d{3}-\d{4}$/
//     if(phone.test(input.value)){
//         alert('OK!')
//     }else{
//         alert('ERROR!')
//     }
// })