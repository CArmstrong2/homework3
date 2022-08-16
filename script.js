// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  
  let length = prompt("Please enter a desired password length (8 - 128)")
  var set = ""

  if(length < 8 || length > 128){
    alert("Please input a valid password length.")
    return ""
  }
  
  let lower = confirm("Include lowercase characters?")
  if(lower){
    set = "abcdefghijklmnopqrstuvwxyz"
  }

  let upper = confirm("Include uppercase characters?")
  if(upper){
    set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  let numeric = confirm("Include numeric characters?")
  if(numeric){
    set += "01234567489"
  }

  let special = confirm("Include special characters?")
  if(special){
    set += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  if(set === ""){
    alert("Please select at least one character set.")
    return ""
  }

  alert("Generating password containing") // finish this
  
  let result = ""
  while(result.length < length){
    let i = Math.floor(Math.random() * set.length)
    result += set[i]
  }
  // bingo bango
  return result
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
