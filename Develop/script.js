// Assignment Code
// this refers to the button in HTML ⬇️
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var pwdOpts = [];
  var pwdLength = prompt("Choose a length for your password (8-128 Characters.");

  if (pwdLength >= 8 && pwdLength <= 128) {
  } else {
    alert("Must be between 8 and 128") 
    return;
    };  

  var lcType = confirm("Do you want lowercase letters?"); 
  if (lcType){
    pwdOpts.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
  } 
  var ucType = confirm("Do you want UpperCase Letters?");
  if (ucType){
    pwdOpts.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
  }
  var numType = confirm("Do you want numeric characters?");
  if (numType){
    pwdOpts.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
  }
  var scType = confirm("Do you want to include special characters?")
  if (scType){
    pwdOpts.push('!', '@', '#', '$', '%', '^', '&', '*', '(', ')')
  }
  console.log(pwdOpts)



  
  var password = generatePassword();
  // This refers to the <textarea> element ⬇️
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
