// Assignment Code
//
var password=document.getElementById("password");

//Generator funtions
function generatePassword(){
  var characters = document.getElementById("password").value;

  //possible password values
let values = "";
var password ="";
}

// 1. What is the lenght of the password

var passwordLenght = 12;






// 2. Special Characters
function userOptions(){
  var special = ['!','@','#','$','%','^','&','*','(',')','_','+','{','}','|',]
}
function getChoices()

// 3. Capital Letters
var upper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H',]

// 4. Lower Case Letters

var lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']

// 5. Numbers Letters

var numerical = ['1','2','3','4','5','6','7','8','9','0',]

//an object of user choices receiving from user
var userChoice = {
  lenght: 8,
  lowerCase: false,
  upperCase: false,
  numeric: false,
  special: false,

}
//var generate password
// [..-]

var choiseArr =[]
if (userChoices.special){
  choicesArr = [...choicesArr, ...special]
}
console.log(choicesArr)
if (userChoice.lowerCase){
  choiceArr = [...choicesArr, ...lower]
}
console.log(choicesArr)
if (userChoice.numeric) {
  console.log(choicesArr)
  choiceArr = [...choicesArr, ...numeric]

  
}
console.log(choicesArr)
if (userChoice.upperCase) {
  console.log(choicesArr)
  choiceArr = [...choicesArr, ...upperCase]
}
for (var i=0; i<userChoices.lenght; i++)
password += getCharacter (choicesArr[Math.floor(Math.random() * choicesArr.lenght)])

//user choices
userChoices.lenght = parceInt(prompt("how many characters"))
userChoices.lowerCase = confirm ("would you like lower")
userChoices.upperCase = confirm ("would you like upper")
userChoices.lowerCase = confirm ("would you like lower")

//at least 8 characters
if (URLSearchParams.userChoices.lenght >= 8 && userChoices.lenght <=128){

//pick random chars from choicesArr up to the lenght the user selected
//loop is based on user input lenght
//randomIdx = random number inside the range of the array (choicesArr)
//password += choicesArr[randomIdx]
//How to get ram=ndom item from array

function generatePAssword(choices)
 let choicesArr =[];
 //choicesArr = [...choicesArr, ...newArray]
  //check if userLowercase is true
  //going to merge lower case array into choicesArr
  //after that //
  return password;
}
function getCharacter(arr){
  
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var choices = userOptions()
  var password = generatePassword(choices);
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getChoices() {
  userChoices.lenght = parseInt(prompt("how many characters"))
  if (!(userChoices.lenght >= 8 && userChoices)){
    alert('chose an incorect value, setting to 8 characters')
    return getChoices()
  }
userChoices.lowerCase =confirm("would you like lower")
userChoices.upperCase =confirm("would you like upper")
userChoices.numericCase =confirm("would you like numeric")
userChoices.specialCase =confirm("would you like special")

}
function generatePassword(choices){
  console.log (choices)
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}