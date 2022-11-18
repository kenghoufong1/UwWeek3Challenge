// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// const button = document.createElement('button')
// button.innerText = 'Can you click me?'
// button.addEventListener('click', () => {
//   alert('Oh, you clicked me!');
// })

// confirm prompt alert

const upperalphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const loweralphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numeric = ["0","1","2","3","4","5","6","7","8","9"];

const specialcharacter =["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","{","}","]","|",":",";","<",">",".","?","/"];

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

console.log(gettype());

  const password =[];
  for (var i = 0 ; i < howmanyletter ; i ++){
    var temp = Math.random();
    password[i]=0;
  }
console.log(password);

}

generatepassword();