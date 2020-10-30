function generatePassword() {

var input = {
    length: prompt("Password length: "),
    lowercase: confirm("Do you want to include lowercase letters?"),
    uppercase: confirm("Do you want to include uppercase letters?"),
    numbers: confirm("Do you want to include numbers?"),
    special: confirm("Do you want to include special characters?"),

    checkLength: function () {
        if (this.length < 8 && this.length > 128) {
            alert("Password must be 8 characters in length, and no more than 128 characters in length.");
            this.length = prompt("Password length: ");
            this.checkLength();
         };
       },

    checkForInput: function () {
        if (this.lowercase === false && this.uppercase === false && this.numbers === false && this.special === false) {
             alert("You must select at least 1 criteria");
             this.lowercase = confirm("Do you want to include lowercase letters?");
             this.uppercase = confirm("Do you want to include uppercase letters?");
             this.numbers = confirm("Do you want to include numbers?");
             this.special = confirm("Do you want to include special characters?");
             this.checkForInput();
        }
      }
    };
  
    input.checkLength(); // calls method to check if password length is valid

    input.checkForInput(); // calls method to check if criteria is chosen by user

    var characterSet = {
      lowercase: ["abcdefghijklmnopqrstuvwxyz", null],
      uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", null],
      numbers: ["0123456789", null],
      special: ["!'#$%&()*+-_/@?/[]{}^.,|:;", null]
    };

    function inputChecker(input, characterSet) {
    if (input === true) {
        include = characterSet[0]
    } else {
        include = characterSet[1];
    };
    return include;
  };

  var lowercaseSet = inputChecker(input.lowercase, characterSet.lowercase);
  var uppercaseSet = inputChecker(input.uppercase, characterSet.uppercase);
  var numberSet = inputChecker(input.numbers, characterSet.numbers);
  var specialSet = inputChecker(input.special, characterSet.special);

  function generatePassword(length) {
    var password = "";

    var fullSet = lowercaseSet + uppercaseSet + numberSet + specialSet;
    for (var i = 0; i < length; i++)  {
        password += fullSet[Math.floor(Math.random() * fullSet.length)];
    }
    return password;
 
  };

  return genPassword(input.length);
};


// DO NOT TOUCH THE CODE BELOW
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
