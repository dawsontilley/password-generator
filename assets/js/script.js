// Assignment code here
//define the possible sets of characters lowerCase,upperCase, numbers, and special characters

var lowerCase=[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers=['1','2','3','4','5','6','7','8','9','0'];
var specialChar=[" ", "!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?",":","@","[","\\","]","^","_","`","{","|","}","~"];
var defaultChar= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",'1','2','3','4','5','6','7','8','9','0'," ", "!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?",":","@","[","\\","]","^","_","`","{","|","}","~"];
//modified random function to pick a char from the inputted array list
var genChar =function(charArray){
var indexChar = Math.floor(Math.random() *charArray.length);
return charArray[indexChar];
}

var getLength = function(){
  var lengthPrompt= window.prompt("How long do you want your password to be? (Must be between 8 and 128 character)");
  lengthPrompt=parseInt(lengthPrompt);
  if (lengthPrompt==NaN){
    console.alert("Not a valid number please enter a number between 8 and 128.");
    getLength();
  };
  if (lengthPrompt<8 || lengthPrompt > 128){
    console.alert("Please enter a number between 8 and 128 ");
  }
  return lengthPrompt;
};

var confirmChoice= function(nameChoice){
  choice=window.prompt("Do you want to include "+nameChoice+" in your character set?");
  choice=choice.toLowerCase();
  while(choice!="yes" || choice!="no"){
    newChoice = window.prompt("Not a valid response. please enter yes or no." );
    choice=newChoice.toLowerCase();
  }
  //if the choice is yes it will prompt a confirm for the user.
  if (choice =="yes"){

    var confirmYes= window.confirm("Are you sure you want"+nameChoice+"in your character set");
    //if confirmed it will return true as confirmed
    if (confirmYes){
      return true;
    }
  }
  else{
  var confirmNo =window.confirm("Are you sure you don't want "+nameChoice+" in your character set?");
  if (confirmNo){
    return false;
  }else{
  return confirmChoice(nameChoice);
  }
}
};

var getCases = function(){
  var returnArray= [];
  var lowerCase_choice=confirmChoice("lower case");
  var upperCase_choice=confirmChoice("upper case");
  var numerical_choice=confirmChoice("numerical");
  var special_choice=confirmChoice("special character");
  if (!lowerCase_choice && !upperCase_choice && !numerical_choice && !special_choice){
    window.alert("You did not choose any of the character sets! Please choose again and select atleast one.")
  return getCases();
  }
  if (lowerCase_choice){
    returnArray.concat(lowerCase);
  }
  else if (upperCase_choice){
    returnArray.concat(upperCase);
  }
  else if (numerical_choice){
    returnArray.concat(numbers);
  }
  else if (special_choice){
    returnArray.concat(specialChar);
  }
  return returnArray;
}

var promptUserNum= function(){
var lengthChoice=window.prompt("Do you want to specify the length of the password select YES or NO");
lengthChoice=lengthChoice.toLowerCase();
while(lengthChoice != "yes" || lengthChoice!="no"){
  lengthChoice=window.prompt("not a valid response, please type YES or NO.");
lengthChoice=lengthChoice.toLowerCase();
}
if (lengthChoice=="yes"){
var confirmLength=window.confirm("are you sure you want to choose your password length?");
if(confirmLength){
  return getLength();
}
else return (Math.floor(Math.random()*(128-8)+8)).toString();
}

};
var generatePassword=function(){
var passwordLength=promptUserNum();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
