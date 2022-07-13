// Assignment Code
var password = document.querySelector('#password')
var generateBtn = document.querySelector("#generate");
var numberofcharacters = parseFloat;
var hasuppercase;
var haslowercase;
var hasnumber;
var hasspecial;

function prompts() {
  var Charactersprompt = prompt('How many characters?', '8-128');
  if (Charactersprompt > 8 && Charactersprompt < 128) {
    numberofcharacters = Charactersprompt
  } else {
    alert('invalidinput')
    return prompts()
  };
  console.log(numberofcharacters)
 if (confirm('Include Uppercase Letters?\n Ok = Yes, Cancel = No') == true )
  hasuppercase = true
  else {
    hasuppercase = false
  };
 console.log (hasuppercase)
 if (confirm('Include Lowercase Letters?\n Ok = Yes, Cancel = No') == true )
 haslowercase = true
 else {
   haslowercase = false
 };
 console.log(haslowercase)
 if (confirm('Include Numbers?\n Ok = Yes, Cancel = No') == true )
 hasnumber = true
 else {
   hasnumber = false
 };
 console.log (hasnumber)
 if (confirm('Include Special Characters?\n Ok = Yes, Cancel = No') == true )
 hasspecial = true
 else {
   hasspecial = false
 };
 console.log (hasspecial)
 
 
}
const getrandoms = {
  Upper: getrandomupper,
  Lower: getrandomlower,
  Numbers: getrandomnumber,
  Symbol: getrandomsymbol,
}



/*function truechars() {
  if (hasuppercase == true)
  getrandomupper()
  else {}
if (haslowercase == true)
  getrandomlower()
  else {}
if (hasnumber == true)
  getrandomnumber()
  else {}
if (hasspecial == true)
  getrandomsymbol()
  else {}
}*/



// Write password to the #password input
function writePassword(Upper, Lower, Numbers, Symbol) {
  prompts()

  var generatedPassword = '';

  const typesof = Upper + Lower + Numbers + Symbol;

  const CharsArr = [ Upper ,  Lower ,  Numbers , Symbol ].filter 
  {
     item => Object.values(item)[0]
  };

  if (typesof === 0){
    return '';
  }

  for (let i = 0; i < CharsArr; i+= typesof) {
    CharsArr.forEach (Char => {
      const coolname = Object.keys(Char)[0];
      
      console.log(coolname)

      generatedPassword += getrandoms[coolname]();
    });
  }
  console.log(generatedPassword);
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

/*password.innertext = generatedPassword(
  hasuppercase,
  haslowercase,
  hasnumber,
  hasspecial,
)*/


function getrandomupper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};

function getrandomlower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};

function getrandomnumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};

function getrandomsymbol() {
  var symbols = "`'/<>,.[]{}()!@#$%^&*-+"
  return symbols[Math.floor(Math.random() * symbols.length)]
};

console.log(getrandomupper());
console.log(getrandomlower());
console.log(getrandomnumber());
console.log(getrandomsymbol());