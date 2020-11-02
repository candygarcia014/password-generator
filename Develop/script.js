// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

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

    function generatePassword() {

        var pwLength = prompt("How long do you want your password to be?")

    }

    if (pwLength < 8 && pwLength > 128) {
        alert("Password should be between 8 and 128 characters")
    } else {
        if (confirm("Do you want your password to contain letters?")) {
            for (var i = 0; i < upperCase.length; i++) {
                result.push(upperCase[i])
            }
        }
        if (confirm("do you want your password to contain numbers?")) {
            for (var i = 0; i < num.length; i++) {
                result.push(num[i])
            }
        }
        if (confirm("do you want your password to contain special characters?")) {
            for (var i = 0; i < specialChar.length; i++) {
                result.push(specialChar[i])
            }

        }
    }
}