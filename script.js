/*Password generator

This script should generate a random password when the generate password button is pressed on athe index page
*/

//Initialized blank password and useful variables
var password = "";
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()+ ";

//script present message
console.log("script loaded");

//funtion that generates password on button push.
const generatePassword = () => {
    password = "";
    
    for (i = 0; i < 10; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
        
        //password += "a";
        //console.log("loop");
    }

    document.getElementById("password-box").innerHTML = password;
    console.log("Password Generated: " + password);
    console.log(password.length);
}

//function that copies the text to the clipboard.
const copy = () => {
    var text = document.getElementById("password-box");
    text.select();
    document.execCommand("copy");

    //this line just removes the selection highlight, makes the window cleaner in my opinion.
    window.getSelection().removeAllRanges();

    console.log("Coppied to clipboard.");
}