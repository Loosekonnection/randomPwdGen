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

// Generate Random Special Characters Function
function genRanSpl() {
  var symbols = ['!', '\"', '£', '$', '%', '^', '&', '*', '>', '<', '\;', '(', ')', '+', '.', ',', '-', ':', '?', '[', ']', '_', '{', '}', '@', '\/', '\\',];
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// User Prompts to generate a password from
function generatePassword() {
  pwdLength = prompt("Please choose a password length between 8 and 128 Characters long");
  if (pwdLength >= 8 && pwdLength <= 128) {

    

  } else {
    alert("That number was not between 8 and 128! Please try again.");
  }
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
