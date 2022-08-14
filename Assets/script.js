// Assignment Code
//var password = document.querySelector('#password')
var generateBtn = document.querySelector("#generate");
var numberofcharacters = parseFloat;
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowers = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!@#$%^&*-=+"
var trueChars = ""


// Generate the Password
function generatePassword() {
  function prompts() {

    // Prompt to select # of characters
    var Charactersprompt = prompt('How many characters?', '8-128');
    if (Charactersprompt >= 8 && Charactersprompt <= 128) {
      numberofcharacters = Charactersprompt
    } else {
      alert('invalidinput')
      return prompts()
    };

    // Promt to select uppercase letters
    if (confirm('Include Uppercase Letters?\n Ok = Yes, Cancel = No') === true) {
      hasuppercase = true
      trueChars += uppers
    } else {
      hasuppercase = false
    };

    // Prompt to select lowercase letters
    if (confirm('Include Lowercase Letters?\n Ok = Yes, Cancel = No') === true) {
      haslowercase = true
      trueChars += lowers
    } else {
      haslowercase = false
    };

    // Prompt to select numbers
    if (confirm('Include Numbers?\n Ok = Yes, Cancel = No') === true) {
      hasnumber = true
      trueChars += numbers
    } else {
      hasnumber = false
    };

    // Prompt to select symbols / special characters
    if (confirm('Include Special Characters?\n Ok = Yes, Cancel = No') === true) {
      hasspecial = true
      trueChars += symbols
    } else {
      hasspecial = false
    };
  }
  prompts()

  var generatedPassword = "";
  // Loops thorugh the selected characters a number of times depending on the number of characters selected
  for (let i = 0; i < numberofcharacters; i++) {
    generatedPassword += trueChars[Math.floor(Math.random() * trueChars.length)];

  }

  function writePassword () {
    var password = generatedPassword;
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  writePassword ()
}



// Adds event listener to generate button
generateBtn.addEventListener('click', generatePassword);