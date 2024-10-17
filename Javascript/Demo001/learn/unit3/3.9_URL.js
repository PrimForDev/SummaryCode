/* 
#From1
https://blop.myweb.com/code/2022/javascript.html#example
- Scheme (Protocol): https
- Host: blop.myweb.com
- Subdomain: blop
- Second-level domain: myweb
- Top-level domain: com
- Subdirectory (Path): code/2022
- File: javascript.html
- Fragment: #example
#From2
http://pc-gaming.xyz/search?cpu=i7&gpu=rtx&ram=8gb
- Query string (after ?)
- Query component preceded: ?
- Key: cpu, gpu, ram
- Value: i7, rtx, 8gb
- Query delimiter: &
#From3
http://admin:1234@192.162.0.1:3333
- Authority
- User info: admin:1234
- Username: admin
- Password: 1234
- Host: 192.162.0.1
- Port: 3333
*/
// console.log(location)

/*
Location
ancestorOrigins: DOMStringList {length: 0}
assign: ƒ assign()
hash: ""
host: "127.0.0.1:5500"
hostname: "127.0.0.1"
href: "http://127.0.0.1:5500/Demo001/index3.9.html"
origin: "http://127.0.0.1:5500"
pathname: "/Demo001/index3.9.html"
port: "5500"
protocol: "http:"
reload: ƒ reload()
replace: ƒ replace()
search: ""
toString: ƒ toString()
valueOf: ƒ valueOf()
Symbol(Symbol.toPrimitive): undefined
[[Prototype]]: Location
*/

// let url = new URL('http://pc-gaming.xyz/search?cpu=i7&gpu=rtx&ram=8gb')
// url.searchParams.forEach((v, k) => {
//     console.log([k, v])
// })

// let url = new URL('http://myweb.com')
// let query = [
//     {key: 'keyword', value: 'javascript'},
//     {key: 'section', value: '2'}
// ]
// for(let q of query){
//     url.searchParams.append(q.key, q.key)
// }
// console.log(url.toString())


// let url = new URL(location.href)
// console.log(url)


let calc = document.getElementById('calc')
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let result = document.getElementById('result')
let url = new URL(location.href)
// if(inputN1){
//     n1.innerText = inputN1
// }
// if(inputN2){
//     n1.innerText = inputN2
// }
calc.addEventListener('submit', (e) => {
    e.preventDefault()
    url.searchParams.set('n1', n1.value)
    url.searchParams.set('n2', n2.value)
    location.href = url.toString()

})

if(url.searchParams.has('n1') && url.searchParams.has('n2')){
    let number1 = url.searchParams.get('n1')
    let number2 = url.searchParams.get('n2')
    result.innerText = +number1 + +number2
}


