# secure-password-generator
Creates a secure random password at the user's request.

# Introduction
This should be a one page program that will create a random secure password at the user's specifications.

# Initial completion
Initially I setup the website to be responsive using bootstrap to minimize the need to write a customized CSS.
The program uses an imported javascript rather than one built into the index page so the script can be used elseware.

# 1/7/20
User specs are not defined yet, but the page will create a 10 charicter secure random password for the user and copy
said password to the clipboard with the click of two buttons. One to generate the password, the other to copy it.

# 1/10/20
Finished password generator

# Instructions
There are 5 parameters the user can chose from when generating a randomly generated password.
* Length (8 - 123 characters as per specifications)
* If it contains numbers
* If it contains symbols
* If it contains capitol letters
* and if it contains lower case letters

The middle box is un-able to be edited by the user using normal means. It displays a password when the user generates one.

The two buttons at the bottom generate a password, and copy to the clipboard.

# Logic
The program is able to detect invalid input in the password length box, therefore it will only work with a number between 8 - 128, and will display an error if given an input outside of that range or anything other than a number.

If the "generate password" button is pressed with no parameters, it will generate a password length error. If pressed with a valid password length but no parameters, the program will not generate a password.

# Forced output
When the number, symbol, capitol, and lower case, options are checked, the output will force at least one instance of each of these parameters in the code. If it fails to generate one, a new password is generated until all conditions are met.

# Screenshot of app
![image](https://user-images.githubusercontent.com/57826922/72141786-1d9a9f80-3359-11ea-943e-8e8e6d8e37c5.png)

# github links
[repository] https://github.com/JosiahkJohnson/secure-password-generator
[link] https://josiahkjohnson.github.io/secure-password-generator/