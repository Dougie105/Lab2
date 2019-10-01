'use strict';

var aboutYou = prompt('What is your name?');
alert('Hello ' + aboutYou + '! Can you get all five of these questions right?');

//QUESTION 1

var military = prompt('Was I in the military?');

military = military.toLowerCase();

if(military === 'yes'|| military === 'y') {
  alert('Correct!');
} else {
  alert('Wrong!');
}

//QUESTION 2

var tattoo = prompt('Do I have tattoos?');

tattoo = tattoo.toLowerCase();

if(tattoo === 'yes' || tattoo === 'y') {
  alert('Sure Do, two on my right arm.');
} else {
  alert('Wrong!!');
}

//QUESTION 3

var piercing = prompt('Do I have any piercings?');

piercing = piercing.toLowerCase();

if(piercing === 'no' || piercing === 'n'){
  alert('Correct, I dont have any');
} else {
  alert('Wrong!!!');
}

//QUESTION 4

var married = prompt('Am I married?');

married = married.toUpperCase();

if(married === 'no' || married === 'n'){
  alert('Wrong!!!!');
} else {
  alert('Correct! for 5 years!');
}

//Question 5

var codeWork = prompt('Do I like coding');

codeWork = codeWork.toUpperCase();

if(codeWork === 'yes' || codeWork === 'y'){
  alert('WRONG!!!!! I LOVE it');
} else {
  alert('Correct! Because I love it!');
}

alert('Thank you for playing ' + aboutYou + '! Have a wonderful day!');
