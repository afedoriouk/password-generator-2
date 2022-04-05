var generateBtn = document.querySelector("#generate");
// Write password to the #password input


generateBtn.addEventListener("click", writePassword);
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
function generatePassword() {

    var promptPassword = prompt("how many characters");
    console.log(promptPassword)
    var confirmLowerCase = confirm("would you like lower");
    var confirmUpperCase = confirm("would you like upper");
    var confirmSpecialCharacter = confirm("would you like special");
    var confirmNumericalCharacter = confirm("would you like a number");
    console.log()
    
    var userChoice = {
        lenght: promptPassword,
        lowerCase: confirmLowerCase,
        upperCase: confirmUpperCase,
        special: confirmSpecialCharacter,
        numeric: confirmNumericalCharacter,
      }
      console.log(userChoice)
    return 'Temporary Password'
}



let password ="";

// 2. Special Characters
function userOptions() {
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|',]
}
function getChoices() {

  // 3. Capital Letters
  var upper = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H',]

  // 4. Lower Case Letters

  var lower = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

  // 5. Numbers Letters

  var numerical = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]
}


//an object of user choices receiving from user



//random number inside the range of the array (choicesArr)
var choicesArr = []
if (userChoices.special) {
  console.log(choicesArr)
  choicesArr = [...choicesArr, ...special]
}
console.log(choicesArr)
if (userChoice.numeric) {
  console.log(choicesArr)
  choicesArr = [...choicesArr, ...numerical]
}
//for loop to choose password characters
for (var i = 0; i < userChoices.lenght; i++) {
  password = getCharacter(choicesArr[Math.floor(Math.random() * choicesArr.lenght)])
}



//Add event listener to generate button

