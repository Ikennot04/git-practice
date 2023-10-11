const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const type = document.getElementById("type");
const button = document.getElementById("button");


/*
button.addEventListener('click', function(){
  Answer.textContent = calculate(num1,num2,type);
});

function calculate (num1,num2,type){
  let number1 = parseFloat(num1.value);
  let number2 = parseFloat(num2.value);
  let total = 0;
  let msg = "";

  switch(type.value){
    case "+":
      total = number1 + number1;
      msg = "The total sum is "
      break;
    case "-":
      total = number1 - number2;
      msg = "The total diiference is "
    break;
    case "*":
      total = number1 * number1;
      msg = "The total product is "
      break;
    case "/":
      total = number1 / number2;
      msg = "The total quotient is "
    break;
  }
  return msg + total;
}*/

button.addEventListener('click', function(){
  Answer.textContent = calculate(num1,num2,type);
});