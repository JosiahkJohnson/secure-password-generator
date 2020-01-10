/*Password generator

This script should generate a random password when the generate password button is pressed on athe index page
*/

//Initialized variables
var settings = document.getElementsByName("settings");
/*
settings[0] = numbers
settings[1] = symbols
settings[2] = capitol letters
settings[3] = lower case letters
*/

//script present message
console.log("script loaded");

//custom password generation method
function generateCustomPassword(){
    //blank password and char-list
    var password = "";
    var characters = "";

    //collect the user specifications
    if(settings[0].checked){
        characters += "1234567890";
    }
    if(settings[1].checked){
        characters += "!@#$%^&*()+";
    }
    
    if(settings[2].checked){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (settings[3].checked){
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    for (i = 0; i < 10; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
        
        //password += "a";
        //console.log("loop");
    }

    document.getElementById("password-box").innerHTML = password;
    console.log("Password Generated: " + password);
    console.log("password length" + password.length);
}

//funtion that generates password on button push. (old method, will be replaced once better one is programmed)
// function generatePassword(){
//     var password = "";
//     var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()+ ";

//     for (i = 0; i < 10; i++){
//         password += characters.charAt(Math.floor(Math.random()*characters.length));
        
//         //password += "a";
//         //console.log("loop");
//     }

//     document.getElementById("password-box").innerHTML = password;
//     console.log("Password Generated: " + password);
//     console.log("password length" + password.length);
// }

//function that copies the text to the clipboard.
function copy(){
    var text = document.getElementById("password-box");
    text.select();
    document.execCommand("copy");

    //this line just removes the selection highlight, makes the window cleaner in my opinion.
    window.getSelection().removeAllRanges();

    console.log("Coppied to clipboard.");
}