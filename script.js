
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// from mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// generates the floor of the Math.random()*max number, which gurantees an integer
function getRandInt(maximum) 
{
  return Math.floor(Math.random() * maximum);
}

// function generates the password using the input length, and true/false
// for each type of character
function generatePassword(l,u,lo,n,s)
{
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// this array will be our final rule
var finalRule = [];
if(u==true)
{
  // if one of the char types is true it is concatenated with finalRule
  finalRule = finalRule.concat(upper);
}
if(lo==true)
{
  finalRule = finalRule.concat(lower);
}
if(n==true)
{
  finalRule = finalRule.concat(nums);
}
if(s==true)
{
  finalRule = finalRule.concat(specChar);
}
var ruleLength = finalRule.length;
var pass = l;
var passArray = [];
// loop through an empty array l number of times, putting a random char
// at each index
for(var i = 0; i < pass; i++)
{
  // need an index for the finalRule
  var z = getRandInt(ruleLength);
  passArray[i] = finalRule[z];
}

// turns into a string with no commas
var x = passArray.join('');
return x;
}
// Write password to the #password input
function writePassword() 
{
  // each boolean will be controlled by the user
  upper = false;
  lower = false;
  numeric = false;
  special = false;
  var input1=window.prompt("This is a password generator. Please select desired length: (8-128)");
  
  //out of range
  if(input1 > 128 || input1 < 2)
  {
    window.alert("INVALID LENGTH, TRY AGAIN");
    writePassword();
    return;
  }
  var passLength = input1;

  var up = window.prompt("Would you like uppercase characters? (y for yes, n for no)");
  // if they say yes to a prompt, that char set will get added to generatePassword()
  if(up =="y")
  {
    upper = true;
  }
  var low = window.prompt("Would you like lowercase characters? (y for yes, n for no)");
  if(low =="y")
  {
    lower = true;
  }
  var num = window.prompt("Would you like numeric characters? (y for yes, n for no)");
  if(num =="y")
  {
    numeric = true;
  }
  var spec = window.prompt("Would you like special characters? (y for yes, n for no)");
  if(spec =="y")
  {
    special = true;
  }
  // if they said no to all character types let them restart
  if(upper == false && lower == false && numeric == false && special == false)
  {
    window.prompt("You need at least one rule to get a password");
    writePassword();
    return;
  }
  // calling generatePassword() with the user length, and what characters to
  // include using booleans
  var password = generatePassword(passLength,upper,lower,numeric,special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password.toString();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword();
