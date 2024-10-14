"use strict";

//--------workshop---------------------------------------
let form = document.querySelector("form");
let result = document.getElementById('result');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let el = event.target;
  let x = Number(el.querySelector("[name=x]").value);
  let y = Number(el.querySelector("[name=y]").value);
  let operator = el.querySelector("[name=operator]").value;
  let output;
  let op;
  switch (operator) {
    case "plus":
      output = x + y;
      op = '+';
      break;
    case "minus":
      output = x - y;
      op = '-';
      break;
    case "multiply":
      output = x * y;
      op = '×';
      break;
    case "divide":
      output = x / y;
      op = '÷';
      break;
    default:
      break;
  }
  console.log(output)
  result.innerText = `${x} ${op} ${y} = ${output}`
});
