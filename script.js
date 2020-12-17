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

// Object for Generate Random Characters functions
var genRanFunctions = {
  ranNum: genRanNum,
  ranLc: genRanLc,
  ranUc: genRanUc,
  ranSpl: genRanSpl
};

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

    var numChoice = confirm("Would you like the password to contain: Numbers?");
    var lcChoice = confirm("Would you like the password to contain: Lowercase Letters?");
    var ucChoice = confirm("Would you like the password to contain: Uppercase Letters?");
    var splChoice = confirm("Would you like the password to contain: Special Characters?");
    console.log(pwdLength, numChoice, lcChoice, ucChoice, splChoice);

    // calculating the boolean true choices
    var countChoices = numChoice + lcChoice + ucChoice + splChoice;
    // console.log(countChoices);

    // Array of Objects containing the Choices and then filtering out false choices
    var choicesArr = [{ numChoice }, { lcChoice }, { ucChoice }, { splChoice }].filter
      (
        item => Object.values(item)[0]
      );
    // console.log(choicesArr); // Console logs the Array of Objects with their key of true

    // If no options are selected, advise user
    if (countChoices === 0) {

      alert("No options were selected, please try again.")

    } 

  } else {
    alert("That number was not between 8 and 128! Please try again.");
  }
}