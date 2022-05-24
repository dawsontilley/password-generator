// Assignment code here
//define the possible sets of characters lowerCase,upperCase, numbers, and special characters to be combined based off user request.

var lowerCase=[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers=['1','2','3','4','5','6','7','8','9','0'];
var specialChar=[" ", "!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?",":","@","[","\\","]","^","_","`","{","|","}","~"];
var defaultChar= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",'1','2','3','4','5','6','7','8','9','0'," ", "!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?",":","@","[","\\","]","^","_","`","{","|","}","~"];
//modified random function to pick a char from the inputted array list.
var genChar =function(charArray){
var indexChar = Math.floor(Math.random() *charArray.length);
return charArray[indexChar];
};

// this function will prompt the the user for the length they desire as long as it is in the right boundries.
var getLength = function(){
  var lengthPrompt= window.prompt("How long do you want your password to be? (Must be between 8 and 128 character)");
  
  var returnLength=parseInt(lengthPrompt);
  if ((returnLength < 8) || (returnLength > 128)){
    window.alert("Please enter a number between 8 and 128.");
    return getLength();
  }
  else if((returnLength >= 8) && (returnLength <=128)){
    return returnLength;
  }else{
    window.alert("you did not enter a number, please enter number between 8 and 28.");
    return getLength();
  }
  
};
// this confirms the choice of a users char selection.
var confirmChoice= function(nameChoice){
  choice=window.prompt("Do you want to include "+nameChoice+" in your character set? Type YES or NO");
  if (choice===null){
    window.confirm("Not a valid option, Type YES or NO");
    confirmChoice(nameChoice);
  }
  choice=choice.toLowerCase();
  /*if((choice!="yes") && (choice!="no")){
    notvalid();
  }*/
  //if the choice is yes it will prompt a confirm for the user.
  if (choice =="yes"){

    var confirmYes= window.confirm("Are you sure you want "+nameChoice+" in your character set?");
    if (confirmYes){
      return true;
    }else{
      return confirmChoice(nameChoice);
    }
  }
  else if(choice =="no"){
  var confirmNo =window.confirm("Are you sure you don't want "+nameChoice+" in your character set?");
  if (confirmNo){
    return false;
  }else{
    return confirmChoice(nameChoice);
  }}
  else{
  window.alert("Not a valid option, Type YES or NO");
  return confirmChoice(nameChoice);
  }

};
// this function defines the character set if the user wants a custom char set.
var getCases = function(){  
  var returnArray=[];
  var lowerCase_choice=confirmChoice("lower case");
  var upperCase_choice=confirmChoice("upper case");
  var numerical_choice=confirmChoice("numerical");
  var special_choice=confirmChoice("special character");
  if ((!lowerCase_choice) && (!upperCase_choice) && (!numerical_choice) && (!special_choice)){
    window.alert("You did not choose any of the character sets! Please choose again and select atleast one.")
  return getCases();
  }
  console.log(lowerCase);
  console.log(upperCase);
  console.log(lowerCase_choice,upperCase_choice,numerical_choice,special_choice);
  if (lowerCase_choice){
    returnArray=returnArray.concat(lowerCase);
    ;
  }
  if (upperCase_choice){
    returnArray=returnArray.concat(upperCase);
    
  }
  if (numerical_choice){
    returnArray=returnArray.concat(numbers);
    
  }
  if (special_choice){
    returnArray=returnArray.concat(specialChar);
    
  }
  console.log(returnArray);
  return returnArray;
}
// called if a non valid response is recorded.
var notvalid=function(input){
  while((input != "yes") && (input!="no")){
    input= window.prompt("not a valid response, please type YES or NO.");
    input=input.toLowerCase();
    
  }
  return 
};
// this function prompts the user if they want to set a password length or if they want a random length.
var promptUserNum= function(){
var lengthChoice=window.prompt("Do you want to specify the length of the password? type YES or NO");

lengthChoice=lengthChoice.toLowerCase();
//window.confirm("you said "+lengthChoice);
if (lengthChoice === "yes"){
  var confirmLength=window.confirm("are you sure you want to choose your password length?");
  if(confirmLength){
    return getLength();
  }else{
    return promptUserNum();
  }
}


else if (lengthChoice=='no'){ 
  var noConfirm = window.confirm("You selected no, thus will have a random password length between 8 and 128 characters.")
  if (noConfirm){
  return Math.floor(Math.random()*(128-8)+8);
  }else{
    return promptUserNum();
  }
}else{
  window.alert("Invald response, Please type YES or NO.");
  return promptUserNum();
}

};
// this function prompts user if they want to definte their charset or if they want the default one.
var promptUserChars=function(){

  var charChoice=window.prompt("Do you want to specify the characters in the password? type YES or NO");
  if (charChoice==null){
    window.alert(" not a valid response, please type YES or NO.");
    return promptUserChars();
  }
  charChoice=charChoice.toLowerCase();
  //window.confirm(charChoice);
  while ((charChoice != "yes" ) && (charChoice !="no")){
    charChoice=window.prompt("not a valid response, please type YES or NO.");
    charChoice=charChoice.toLowerCase();
  }
  if (charChoice==="yes"){
    var confirmChar=window.confirm("are you sure you want to choose your character Set?");
  if(confirmChar){
    return getCases();
  }else{
    return promptUserChars();
  }
  }

  else{ 
    var noConfirm=window.confirm("you are not selecting a character set, thus will use the default one.");
    if (noConfirm){
    return defaultChar;}
    else{
      return promptUserChars();
    }
}


};
// this function combines all helper functions to generate the password and return it to the site.
var generatePassword=function(){
  var passwordLength=promptUserNum();
  var passwordChars=promptUserChars();
  console.log(passwordChars);
  final_password="";
  for (var i=0;i<passwordLength;i++){
    charToAdd=genChar(passwordChars);
    console.log(charToAdd);
    final_password+=charToAdd;
  }
  console.log(final_password);
  return final_password;
};
//all of the code below is from the original author and was cloned along with the HTML and CSS
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
