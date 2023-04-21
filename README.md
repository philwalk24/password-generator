# Module Three Password Generator

## Description

In this assignment, we were asked to create a password generator using window
prompts in JavaScript. The idea is that the computer asks you how long of a password you want, as well as asking if you want uppercase chars, lowercase chars, special chars and numbers. After the user is done making their selections, the website will generate a potential password using a string of random characters that are decided by the user.

## Installation

N/A

## Usage

The first question the user is asked is how long of a password do they want. It must be between 2-128 characters and the program will run again if there's an invalid input. The user then has to enter either "y" or "n" for each question about whether or not that type of character will be included. If the user answers no to all of the questions, the program will start again. Everytime the user hits the Generate Password button after, it will ask again if they want another password.

## Credits

I used this function to generate random integers more easily:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


## License

Please refer to the LICENSE in the repo.
