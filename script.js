// Generate Random Numbers Function
function genRanNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generate Random Lowercase Letters Function
function genRanLc() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Generate Random Uppercase Letters Function
function genRanUc() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
