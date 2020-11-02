// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("Hello! Please click the Generate Password button below to begin")

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var generatePassword = document.querySelector("#password");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var specialChar = "!')(*+,-.$/:;<=>%&?@[#\]^_`{|}~";
    var num = "0123456789";
    var passwordText = []
    var result = []
    var pwLength = Number
    upperCase = upperCase.split("")
    lowerCase = lowerCase.split("")
    specialChar = specialChar.split("")
    num = num.split("")

    passwordText.value = password;

    function generatePassword() {

        var pwLength = prompt("How long do you want your password to be? Select a number between 8 and 128")

    }
    // prompts for character selection - 
    // Upper & lower case
    if (pwLength < 8 && pwLength > 128) {
        alert("Password should be between 8 and 128 characters")
    }
    if (confirm("Do you want your password to contain upper case letters?")) {
        for (var i = 0; i < upperCase.length; i++) {
            result.push(upperCase[i])
        }
        if (confirm("Do you want your password to contain lower case letters?")) {
            for (var i = 0; i < lowerCase.length; i++) {
                result.push(lowerCase[i])
            }
        }
    }
    // console.log(result)

    //Numbers
    if (confirm("do you want your password to contain numbers?")) {
        for (var i = 0; i < num.length; i++) {
            result.push(num[i])
        }
    }
    //console.log(result)

    //Special characters
    if (confirm("do you want your password to contain special characters?")) {
        for (var i = 0; i < specialChar.length; i++) {
            result.push(specialChar[i])
        }

    }
    console.log(result)

    //Generate pw function 
    function generatePassword() {
        console.log(passwordText)
        var passwordText = ""
        for (var i = 0; i < pwLength; i++) {
            passwordText += characterCatcher[Math.floor(math.random() * characterCatcher.length)]
        }
        return passwordText
    }

}
// function generatePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);