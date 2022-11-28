// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatepassword);

//Created arrays for the different types of character that will be needed 
const upperalphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const loweralphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numericcharacter = ["0","1","2","3","4","5","6","7","8","9"];

const specialcharacter =["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","{","}","]","|",":",";","<",">",".","?","/"];


// Created a function that will be called when the button generate password will call when clicked
function generatepassword() {
  var howmanyletter = prompt("how many character do you want?");
  if(howmanyletter < 7 || howmanyletter > 128){
    alert("Sorry your password is too short or too long");
    return;
  }
  var lowercase = confirm("Do you want Lowercase letter in the password?");

  var uppercase = confirm("Do you want Uppercase letter in the password?");

  var numeric = confirm("Do you want numeric in the password?");

  var special = confirm("Do you want special characters in the password?");

  //function gettype
  function gettype(){
    var typesofcharacter = 0 ;
    if(lowercase){
      typesofcharacter ++;
    };
    if(uppercase){
      typesofcharacter ++;
    };
    if (numeric){
      typesofcharacter++;
    };
    if (special){
      typesofcharacter++;
    };
    return typesofcharacter;
  }
  
  if (gettype()=== 0){
    alert("Sorry you must pick a type of characters for your password");
  }

  var allcharactertemp = [];
  
  if(lowercase){
    allcharactertemp.push(...loweralphabet);
  };
  if(uppercase){
    allcharactertemp.push(...upperalphabet); 
  }
  if(numeric){
    allcharactertemp.push(...numericcharacter);
  }
  if(special){
    allcharactertemp.push(...specialcharacter);
  }

 

  const password =[];
  for (var i = 0 ; i < howmanyletter ; i ++){
    var temp = (Math.round(Math.random()*allcharactertemp.length));
    password[i]=allcharactertemp[temp];
  }

  newpassword=password.join("");

  var changepassword = document.querySelector("#password");
  changepassword.textContent = newpassword;
}

