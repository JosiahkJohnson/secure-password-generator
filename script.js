/*Password generator

This script should generate a random password when the generate password button is pressed on athe index page
*/

//script present message
console.log("script loaded");

//custom password generation method
function generateCustomPassword(){
    var settings = document.getElementsByName("settings");
    var passwordLength = parseInt(document.getElementById("passwordLength").value);
    /*
    settings[0] = numbers
    settings[1] = symbols
    settings[2] = capitol letters
    settings[3] = lower case letters
    */

    //blank password and char-list
    var password = "";
    var characters = "";

    //variables containing specification characters
    var numbers = "1234567890";
    var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var capitols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowers = "abcdefghijklmnopqrstuvwxyz";

    if(typeof(passwordLength) === "number" && passwordLength > 7 && passwordLength < 129){
        //collect the user specifications
        if(settings[0].checked){
            characters += numbers;
        }
        if(settings[1].checked){
            characters += symbols;
        }
        if(settings[2].checked){
            characters += capitols;
        }
        if (settings[3].checked){
            characters += lowers;
        }

        for (i = 0; i < passwordLength; i++){
            password += characters.charAt(Math.floor(Math.random()*characters.length));
            
        }
        
        //check the password to make sure it containes all the needed characters
        if(settings[0].checked && !compareStrings(password, numbers)){
            generateCustomPassword();
        }
        else if(settings[1].checked && !compareStrings(password, symbols)){
            generateCustomPassword();
        }
        else if(settings[2].clicked && !compareStrings(password, capitols)){
            generateCustomPassword();
        }
        else if(settings[3].clicked && !compareStrings(password, lowers)){
            generateCustomPassword();
        }

        document.getElementById("password-box").innerHTML = password;
        console.log("Password Generated: " + password);
        console.log("password length" + password.length);
    }
    else{
        alert("Invalid password length");
    }
}

function compareStrings(pass, compare){
    for(i = 0; i < compare.length; i++){
        if(pass.includes(compare[i])){
            return true;
        }
    }
    return false;
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