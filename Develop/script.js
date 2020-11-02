// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    generateByn.addEventListener("click", writePassword);

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var specialChar = "!')(*+,-.$/:;<=>%&?@[#\]^_`{|}~";
    var num = "0123456789";
    var newPass = []
    var result = []
    upperCase = upperCase.split("")
    lowerCase = lowerCase.split("")
    specialChar = specialChar.split("")
    num = num.split("")

    alert("Hello! Please click Generate password to begin")




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);