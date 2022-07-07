// Assignment Code
var generateBtn = document.querySelector("#generate");


function prompts(){
  var numberofcharacters;
  var Charactersprompt = prompt('How many characters?','8-128');
    if (Charactersprompt > 8 && Charactersprompt < 128) {
      numberofcharacters = Charactersprompt
    } else {
     alert ('invalidinput')
     return prompts()
    } ;
  var uppercaseprompt = confirm ('Include Uppercase Letters?\n Ok=yes, cancel=no');
  var lowercaseprompt = confirm ('Include Lowercase Letters?\n Ok=yes, cancel=no');
  var Numbersprompt = confirm ('Include Numbers?\n Ok=yes, cancel=no');
  var specialprompt = confirm ('Include Special Characters?\n Ok=yes, cancel=no'); 
}

uppercasenum = (math.floor(math.random()* 26)+65)
console.log uppercasenum;

lowercasenum = (math.floor(math.random()*26) + 97)
numberofnums = (math.floor(math.random()*10)+48)





var finalpass = []
  while (finalpass.length < numberofcharacters){
    finalpass= uppercaseprompt+ lowercasenum +numberofcharacters)
  }
   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', prompts);
