const loginContainer = document.getElementById("login-container");
const all = document.querySelector(".all");
const balance = document.getElementById("balance");
const accountNums = document.getElementById("accountNums");
const boxDeposit = document.getElementById("boxDeposit");
const buttonDeposit = document.getElementById("buttonDeposit");
const boxWithdraw = document.getElementById("boxWithdraw");
const buttonWithdraw = document.getElementById("buttonWithdraw");
const submit = document.getElementById("submit");
const accname_number = document.getElementById("accname_number");
const Accname = document.getElementById("Accname");
const type = document.getElementById("type");
const newbalance = document.getElementById("newbalance"); 

document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "ken" && password === "123") 
    {
         loginContainer.style.display = "none";
         all.style.display = "block";
    } 
    else 
    {
      alert("Invalid username or password. Please try again.");
    }
  });
const formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
});

submit.addEventListener('click', function() {
    if (Accname.value == "" || accountNums.value == "" || balance.value == "") {
      alert("Please enter all the required fields");
    } else {
      accname_number.textContent = "Account Name: " + Accname.value + "(" +  accountNums.value + ")";
      newbalance.textContent =  type.value + ": " + formatter.format(balance.value);
      
    }
  });

buttonDeposit.addEventListener('click', function() {
  const depositAmount = parseFloat(boxDeposit.value);
  
  switch (true) {
    case isNaN(depositAmount):
      alert('Please enter a valid deposit amount');
      break;
    case depositAmount <= 0:
      alert('Deposit amount must be greater than 0');
      
      break;
    default:
      balance.value = parseFloat(balance.value) + depositAmount;
      newbalance.textContent =  type.value + ": " + formatter.format(balance.value);
      boxDeposit.value = '';
      break;
  }
});




buttonWithdraw.addEventListener('click', function() {
    const withdrawAmount = parseFloat(boxWithdraw.value);
    
    switch (true) {
      case isNaN(withdrawAmount):
        alert('Please enter a valid withdrawal amount');
        break;
      case withdrawAmount <= 0:
        alert('Withdrawal amount must be greater than 0');
        break;
      case withdrawAmount > parseFloat(balance.value):
        alert('Insufficient funds. Money doesn\'t grow on trees but it also doesn\'t magically appear in your account! ');
        break;
      default:
        balance.value = parseFloat(balance.value) - withdrawAmount;
        newbalance.textContent =  type.value + ": " + formatter.format(balance.value);
        boxWithdraw.value = '';
        break;
    }
  });


