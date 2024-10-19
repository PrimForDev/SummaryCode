// let url = "https://fakerapi.it/api/v2/persons?"

// // fetch(url)
// //     .then(res => res.json())
// //     .then(console.log)

// async function fetchAsync (url){
//     let res = await fetch(url)
//     let json = await res.json()
//     return json
// }

// // function fetchAsync(){
// //     return new Promise((resolve, reject) =>{
// //         fetch(url)
// //         .then(res => res.json())
// //         .then(resolve)
// //         .catch(reject)
// //     })
// // }

// //wrapped
// async function main(){
//     let url = 'https://fakerapi.it/api/v2/persons?_locale=th_TH'
//     let json = await fetchAsync(url)
//     console.log(json)
// }
// main()

//------workshop-----------
async function fetchAsync(url) {
    let res = await fetch(url);
    let json = await res.json();
    return json;
}
let fakerUrl = new URL('https://fakerapi.it/api/v2/persons');
let result = document.getElementById('result')
// let faker = document.forms.faker
let { faker } = document.forms;

faker.addEventListener('submit', async (e) => { // Make this function async
    e.preventDefault();
    result.innerHTML = ''
    let formData = new FormData(faker);

    for (let [key, value] of formData.entries()) {
        fakerUrl.searchParams.set('_' + key, value);
    }

    console.log(fakerUrl.toString());

    let json = await fetchAsync(fakerUrl); // Now this works because the function is async
    console.log(json); // Display the fetched data
    for(let person of json.data){
        // let string = JSON.stringify(person) //object(json) --> string     //JSON.parse()//string --> json  
        let li =  document.createElement('li')
        // li.innerText = string
        li.innerText = `${person.firstname} ${person.lastname}`
        result.append(li)

    }
});