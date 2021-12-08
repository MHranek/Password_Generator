// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// X THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// X THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// X THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// X THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// X THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolCharacters = ["!", "@", "#", "$", "%", "^", "&"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// generatePassword function
function generatePassword(){
  // variables wanted declared
  var wantsUpper;
  var wantsLower;
  var wantsSymbol;
  var wantsNumber;

  // checking first input
  var numCharacters = prompt("How long do you want your password?", "(8-128 characters)");
  if (numCharacters != null) {
    var numCharacters = parseInt(numCharacters, 10);
    if (isNaN(numCharacters)) {
      confirm("Input must be a number.");
      return;
    } else if(numCharacters < 8) {
      confirm("Passwords must be at least 8 characters long.");
      return;
    } else if(numCharacters > 128) {
      confirm("Passwords must be no more than 128 characters long.");
      return;
    }
  } else {
    console.log("Failed, input returned null");
  }

  // Characters Prompts

  wantsUpper = confirm("Do you want upper case letters?");
  wantsLower = confirm("Do you want lower case letters?");
  wantsSymbol = confirm("Do you want symbols?");
  wantsNumber = confirm("Do you want numbers?");

  // Check at least one value is true

  if (wantsUpper || wantsLower || wantsSymbol || wantsNumber) {
    // generate Password
  } else {
    confirm("You must select at least one type of character.");
    return;
  }

  // Checking prompt output
  console.log(wantsUpper);
  console.log(wantsLower);
  console.log(wantsSymbol);
  console.log(wantsNumber);

  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
