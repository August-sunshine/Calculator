// Access the "calculator display" element
var display = document.querySelector("#calculator__display");

if (display == null) {   //Debugging
  alert("display is null")
}
console.log(display.value);


// Makse a dynamic function that can handle any number button clicks. 
function clickNum(num) {
  if(display.value === "0") {   // If/else statement to remove the leading zero once numbers are pressed. 
    display.value = num
  } else {
  display.value = display.value + num
  }
}


// Creates a function for the "clear" button.
function clickClear() {
  display.value = "0"
}


// Creates a function for the operator buttons.
function clickOperator(operator) {
  display.value = display.value + operator
}


// Creates a function for the "=" button.
function getTotal() {
  display.value = eval(display.value)
}