// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolCharacters = ["!", '"', "@", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", "=", ",", "-", ".", "/", ":", ";", "<", ">", "[", "]", "?", "_", "`", "{", "}", "|", "~"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// generatePassword function
function generatePassword(){
  // variables wanted declared
  var wantsUpper;
  var wantsLower;
  var wantsSymbol;
  var wantsNumber;

  // Get random int (for array index)
  function getRandomInt(num){
    return Math.floor(Math.random() * num);
  }

  // checking first input
  var numCharacters = prompt("How long do you want your password?", "8-128");
  if (numCharacters != null) {
    var numCharacters = parseInt(numCharacters, 10);
    if (isNaN(numCharacters)) {
      alert("Input must be a number.");
      return;
    } else if(numCharacters < 8) {
      alert("Passwords must be at least 8 characters long.");
      return;
    } else if(numCharacters > 128) {
      alert("Passwords must be no more than 128 characters long.");
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

    var passwordArray = [];

    // ------------------------------------------------------------------------------------
    // putting all selected characters into one array (Yields password weighted more towards characters with large arrays ie: alphabet has 26 values vs numbers has 10 values)
    // var totalCharacterSet = [];

    // // Adds uppercase to total array if selected
    // if (wantsUpper) {
    //   totalCharacterSet = totalCharacterSet.concat(upperCaseCharacters);
    // }
    // // Adds lowercase to total array if selected
    // if (wantsLower) {
    //   totalCharacterSet = totalCharacterSet.concat(lowerCaseCharacters);
    // }
    // // Adds symbols to total array if selected
    // if (wantsSymbol) {
    //   totalCharacterSet = totalCharacterSet.concat(symbolCharacters);
    // }
    // // Adds numbers to total array if selected
    // if (wantsNumber) {
    //   totalCharacterSet = totalCharacterSet.concat(numberCharacters);
    // }
    // // Iterates through each index of password array, adding a random selection from total array
    // for (var i = 0; i < numCharacters; i++){
    //   passwordArray.push(totalCharacterSet[getRandomInt(totalCharacterSet.length)]);
    // }
    // ------------------------------------------------------------------------------------


    // ------------------------------------------------------------------------------------
    // Selecting characters from an array of arrays (Yields more consistently distributed password, each set of characters should have equal representation on average)
    var arrayCharacterArray = [];
    // adds uppercase array to array of arrays
    if (wantsUpper) {
      arrayCharacterArray.push(upperCaseCharacters);
      // Adds one upper case character to the array (if selected)
      passwordArray.push(upperCaseCharacters[getRandomInt(upperCaseCharacters.length)]);
    }
    // adds lowercase array to array of arrays
    if (wantsLower) {
      arrayCharacterArray.push(lowerCaseCharacters);
      // Adds one lower case character to the array (if selected)
      passwordArray.push(lowerCaseCharacters[getRandomInt(lowerCaseCharacters.length)]);
    }
    // adds symbol array to array of arrays
    if (wantsSymbol) {
      arrayCharacterArray.push(symbolCharacters);
      // Adds one symbol to the array (if selected)
      passwordArray.push(symbolCharacters[getRandomInt(symbolCharacters.length)]);
    }
    // adds number array to array of arrays
    if (wantsNumber) {
      arrayCharacterArray.push(numberCharacters);
      // Adds one number to the array (if selected)
      passwordArray.push(numberCharacters[getRandomInt(numberCharacters.length)]);
    }
    // saves current length of password array, this starting set of values guarantees at least one of each selected character
    var startingPasswordArray = passwordArray.length;
    // Iterates through index of password array, first selecting which array to pull from, then selecting which index of that array to use as the value
    // Goes until it fills the length requested by the user
    for (var i = 0; i < (numCharacters - startingPasswordArray); i++) {
      var small = getRandomInt(arrayCharacterArray.length);
      var large = getRandomInt(arrayCharacterArray[small].length);
      passwordArray.push(arrayCharacterArray[small][large]);
    }
    // ------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------
    // The Fisher Yates Method of randomly sorting an array
    // Randomizes the array sort so the guaranteed characters are not necessarily always at the front
    for (let i = passwordArray.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = passwordArray[i]
      passwordArray[i] = passwordArray[j]
      passwordArray[j] = k
    }
    // ------------------------------------------------------------------------------------

    // Combines every index in password array into one string and returns it as the value of the function
    return passwordArray.join("");
  } else {
    alert("You must select at least one type of character.");
  }

  return;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  // Count distribution of characters

  // Geeks for Geeks code
  // ------------------------------------------------------------------------------------
  // JavaScript program to count the uppercase,
  // lowercase, special characters
  // and numeric values

  // Function to count uppercase, lowercase,
  // special characters and numbers
  function Count(str)
  {
    var upper = 0,
      lower = 0,
      number = 0,
      special = 0;
    for (var i = 0; i < str.length; i++)
    {
      if (str[i] >= "A" && str[i] <= "Z") upper++;
      else if (str[i] >= "a" && str[i] <= "z") lower++;
      else if (str[i] >= "0" && str[i] <= "9") number++;
      else special++;
    }
    // console.log("Upper case letters: " + upper);
    // console.log("Lower case letters : " + lower);
    // console.log("Number : " + number);
    // console.log("Special characters : " + special);
  }

  // Driver function
  var str = password;
  Count(str);
    
  // This code is contributed by rdtank.
  // ------------------------------------------------------------------------------------

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);