// let file = document.querySelector('input');
// let result = document.getElementById('result');
// file.addEventListener('input', (e) => {
//   let  file = e.target.files[0]
//   if(!file){
//     return
//   }
//   let reader = new FileReader()
//   reader.onload = (event) => {
//     console.log('CALLBACK?', event.target.result)
//     result.innerText = event.target.result
//   }
//   reader.readAsText(file)
// });

//---------photo-------------------------------
// let file = document.querySelector("input");
// let result = document.getElementById("result");
// file.addEventListener("input", (e) => {
//   let file = e.target.files[0];
//   if (!file) {
//     return;
//   }
//   //   let reader = new FileReader()
//   //   reader.onload = (event) => {
//   //     console.log('CALLBACK?', event.target.result)
//   //     result.src = event.target.result
//   //   }
//   //   reader.readAsDataURL(file)
//   let url = URL.createObjectURL(file);
//   result.src = url;
// });

//workshop------------------------------

let file = document.querySelector('input');
let result = document.getElementById('result');

function readText(file){
    return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.onload = (event) => {
          console.log('CALLBACK?', event.target.result)
          resolve(event.target.result)
        }
        reader.onerror = reject
        reader.readAsText(file)
    })
    
}
file.addEventListener('input', async (e) => {
  let  file = e.target.files[0]
  if(!file){
    return
  }

  result.innerText = await readText(file)
  
});