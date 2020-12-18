# Random Password Generator


*   GitHub Repository [randomPwdGen](https://github.com/Loosekonnection/randomPwdGen)
*   GitHub Pages URL [Password Generator]()
---

<br>

## Psuedo Code

*   The Password Generator must return a random password based on a series of questions/prompts to the end user after the end user clicks the 'Generate Password' button.

*   Create 5 questions for the end user to answer:

    *   Q1: How long would you like the password to be?
    *   Q2: Should the password contain Numbers?
    *   Q3: Should the password contain Lowercase Letters?
    *   Q4: Should the password contain Uppercase Letters?
    *   Q5: Should the password contain Special Characters?

*   Q1: The password must be between 8 - 128 charaters long.

    *   The user must be advised of the minimum and maximum charater choice available.
    *   If the number input by the user is outside of 8 - 128, the user must be prompted to try again.
    *   If the number input by the user is between 8 and 128, the next question must be presented.

*   Q2-Q5: These questions are of Yes or No choice, we can use a true or false capture for these.

    *   If the answer to any of these is True, they need to be in the random password.
    *   If the answer to any of these is fales, we need to filter/exculed these from the password.
    *   if a user chooses false to all of these then no password can be generated, and so must include at least one of them. 


---

<br>

## Credits

*   Chigbo Onyinyechukwu [LinkedIn](https://www.linkedin.com/in/nnadi-onyinyechukwu-73726953/)
*   Paul Iurea [LinkedIn](https://www.linkedin.com/in/paul-iurea/)
*   ASCII Table for CharCodes [Ohio State Education](https://www.asc.ohio-state.edu/demarneffe.1/LING5050/material/characters.html).
*   Math.floor & Math.random [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)