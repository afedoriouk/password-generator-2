var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// 2. Special Characters
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|',]
// 3. Capital Letters
  var upper = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H',]
// 4. Lower Case Letters
  var lower = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
// 5. Numbers Letters
  var numerical = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]



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
  // console.log()

  var userChoices = {
    lenght: promptPassword,
    lowerCase: confirmLowerCase,
    upperCase: confirmUpperCase,
    special: confirmSpecialCharacter,
    numeric: confirmNumericalCharacter,
  }
  // console.log(userChoices)

  //funtion to write password if the answer is true or false

  function writePassword(){
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("password");

    if (correctPrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else{
    passwordText.value = "";
  }
  }
  //random number inside the range of the array (choicesArr)
  var choicesArr = []
  if (userChoices.special) { choicesArr = [...choicesArr, ...special]
  }
  if (userChoices.numerical) { choicesArr = [...choicesArr, ...numerical]
  }
  if (userChoices.upper) {choicesArr = [...choicesArr, ...upper]
  }
  if (userChoices.lower) {choicesArr = [...choicesArr, ...lower]
  }
  var password=""
  
  //for loop to choose password characters
  for (var i = 0; i < userChoices.lenght; i++) {
    var newPassword = Math.floor(Math.random() * choicesArr.length)
    console.log(newPassword)
    password = password + choicesArr[newPassword];
    console.log(choicesArr[newPassword])
  }
console.log(password)

  return password;
}



// let password = "";



//an object of user choices receiving from user






//Add event listener to generate button

