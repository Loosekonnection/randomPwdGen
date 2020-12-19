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

// Object to Generate Random Characters using respective functions
var genRanFunctions = {
    numChoice: "genRanNum()",
    lcChoice: "genRanLc()",
    ucChoice: "genRanUc()",
    splChoice: "genRanSpl()"
};

// Functions that generate random characters
function genRanNum() {
    return (Math.floor(Math.random() * 10)).toString();
}

function genRanLc() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function genRanUc() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function genRanSpl() {
    var symbols = ['!', '\"', '£', '$', '%', '^', '&', '*', '>', '<', '\;', '(', ')', '+', '.', ',', '-', ':', '?', '[', ']', '_', '{', '}', '@', '\/', '\\',];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// User Prompts to generate a password from
function generatePassword() {
    pwdLength = parseInt(prompt("Please choose a password length between 8 and 128 Characters long"));
    if (pwdLength >= 8 && pwdLength <= 128) {

        var numChoice = confirm("Would you like the password to contain: Numbers?");
        var lcChoice = confirm("Would you like the password to contain: Lowercase Letters?");
        var ucChoice = confirm("Would you like the password to contain: Uppercase Letters?");
        var splChoice = confirm("Would you like the password to contain: Special Characters?");

        // Array of Objects containing the Choices and then filtering out false choices
        var choicesArr = [{ numChoice }, { lcChoice }, { ucChoice }, { splChoice }].filter
            (
                item => Object.values(item)[0]
            );
        var genPassword = '';

        // Randomly generates the characters per the end users confirmed choices using the genRanFunctions object
        if (numChoice || lcChoice || ucChoice || splChoice) {
            for (var i = 0; i <= pwdLength;) {
                choicesArr.forEach(choice => {
                    var chosen = Object.keys(choice)[0];
                    genPassword += eval(genRanFunctions[chosen]);
                    i++;
                });
            }
            // This splits and randomly shuffles the generated genPassword string
            password = genPassword.split('').sort(function () {
                return 0.5 - Math.random()
            }).join('');
            return password.slice(0, pwdLength);
        // Prompt end user no options/countChoices were selected
        } else {
            password = "No options selected, You will need to select at least one! Please try again.";
            return password;
        }
    } else {
        // Prompt end user of incorrect input number
        password = "That number was not between 8 and 128! Please try again.";
        return password;
    }
}