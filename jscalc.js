var inputOne = document.querySelector("#inputOne");
var inputTwo = document.querySelector("#inputTwo");
var addButton = document.querySelector("#Add");
var span = document.querySelector("span");
var subtractButton = document.querySelector("#Subtract");
var multiplyButton = document.querySelector("#Multiply");
var divButton = document.querySelector("#Divide");
var remainButton = document.querySelector("#Remainder");

addButton.addEventListener("click", function () {
  if (inputOne.value === "" || inputTwo.value === "") {
    span.innerText = "Please enter values.";
  } else {
    var numberOne = parseInt(inputOne.value);
    var numberTwo = parseInt(inputTwo.value);
    span.innerText = numberOne + numberTwo;
  }
});
subtractButton.addEventListener("click", function () {
  if (inputOne.value === "" || inputTwo.value === "") {
    span.innerText = "Please enter values.";
  } else {
    var numberOne = parseInt(inputOne.value);
    var numberTwo = parseInt(inputTwo.value);
    span.innerText = numberOne - numberTwo;
  }
});
multiplyButton.addEventListener("click", function () {
  if (inputOne.value === "" || inputTwo.value === "") {
    span.innerText = "Please enter values.";
  } else {
    var numberOne = parseInt(inputOne.value);
    var numberTwo = parseInt(inputTwo.value);
    span.innerText = numberOne * numberTwo;
  }
});
divButton.addEventListener("click", function () {
  if (inputOne.value === "" || inputTwo.value === "") {
    span.innerText = "Please enter values.";
  } else {
    var numberOne = parseInt(inputOne.value);
    var numberTwo = parseInt(inputTwo.value);
    span.innerText = numberOne / numberTwo;
  }
});
remainButton.addEventListener("click", function () {
  if (inputOne.value === "" || inputTwo.value === "") {
    span.innerText = "Please enter values.";
  } else {
    var numberOne = parseInt(inputOne.value);
    var numberTwo = parseInt(inputTwo.value);
    span.innerText = numberOne % numberTwo;
  }
});
