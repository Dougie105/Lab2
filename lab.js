// 'use strict';

// var aboutYou = prompt('What is your name?');
// alert('Hello ' + aboutYou + '! Can you get all five of these questions right?');

// //QUESTION 1

// var military = prompt('Was I in the military?');

// military = military.toLowerCase();

// if(military === 'yes'|| military === 'y') {
//   // console.log('Correct!');
//   alert('Correct!');
// } else {
//   // console.log('Wrong!');
//   alert('Wrong!');
// }

// //QUESTION 2

// var tattoo = prompt('Do I have tattoos?');

// tattoo = tattoo.toLowerCase();

// if(tattoo === 'yes' || tattoo === 'y') {
//   // console.log('Correct!');
//   alert('Sure Do, two on my right arm.');
// } else {
//   // console.log('Wrong!');
//   alert('Wrong!!');
// }

// //QUESTION 3

// var piercing = prompt('Do I have any piercings?');

// piercing = piercing.toLowerCase();

// if(piercing === 'no' || piercing === 'n'){
//   // console.log('Correct!');
//   alert('Correct, I dont have any');
// } else {
//   // console.log('Wrong!');
//   alert('Wrong!!!');
// }

// //QUESTION 4

// var married = prompt('Am I married?');

// married = married.toUpperCase();

// if(married === 'NO' || married === 'N'){
//   // console.log('Wrong!');
//   alert('Wrong!!!!');
// } else {
//   // console.log('Correct!')
//   alert('Correct! for 5 years!');
// }

// //Question 5

// var codeWork = prompt('Do I like coding');

// codeWork = codeWork.toUpperCase();

// if(codeWork === 'YES' || codeWork === 'Y'){
//   // console.log('Correct!');
//   alert('Correct!!!!! I LOVE IT');
// } else {
//   // console.log('Wrong!');
//   alert('Wrong!!!!!');
// }

//Question 6


var answer = 7;
alert('Guess a number 1-10, you have 4 attempts');

for (var i=0; i<4; i++) {
  var attempt = prompt('Pick a number!');
  attempt = parseInt(attempt);

  if (attempt === answer) {
    alert('YAAAY!');
    break;
  }
  if (attempt > answer) {
    alert('Too high, try again!');
  }
  if (attempt < answer) {
    alert('Too low, Try again!');
  }
}
