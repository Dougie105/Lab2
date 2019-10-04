'use strict';

var aboutYou = prompt('What is your name?');
alert('Hello ' + aboutYou + '! Can you get all five of these questions right?');

var score = [0, 0, 0, 0, 0, 0, 0, ];

// //QUESTION 1
function questionOne() {

  var military = prompt('Was I in the military?');
  military = military.toLowerCase();
  if (military === 'yes' || military === 'y') {
    // console.log('Correct!');
    alert('Correct!');
    return score[0] = 1;
  } else {
    // console.log('Wrong!');
    alert('Wrong!');
  }
}
console.log(questionOne);
console.log(score);

// //QUESTION 2
function questionTwo() {

  var tattoo = prompt('Do I have tattoos?');
  tattoo = tattoo.toLowerCase();
  if (tattoo === 'yes' || tattoo === 'y') {
    // console.log('Correct!');
    alert('Sure Do, two on my right arm.');
    return score[1] = 1;
  } else {
    // console.log('Wrong!');
    alert('Wrong!!');
  }
}
//console.log(questionTwo);

// //QUESTION 3
function questionThree() {
  var piercing = prompt('Do I have any piercings?');

  piercing = piercing.toLowerCase();

  if (piercing === 'no' || piercing === 'n') {
    // console.log('Correct!');
    alert('Correct, I dont have any');
    return score[2] = 1;
  } else {
    // console.log('Wrong!');
    alert('Wrong!!!');
  }
}
//console.log(questionThree);

//QUESTION 4
function quesionFour() {

  var married = prompt('Am I married?');

  married = married.toUpperCase();

  if (married === 'NO' || married === 'N') {
    // console.log('Wrong!');
    alert('Wrong!!!!');
  } else {
    // console.log('Correct!')
    alert('Correct! for 5 years!');
    return score[3] = 1;
  }
}
//console.log(quesionFour);

//Question 5
function questionFive() {

  var codeWork = prompt('Do I like coding');

  codeWork = codeWork.toUpperCase();

  if (codeWork === 'YES' || codeWork === 'Y') {
    // console.log('Correct!');
    alert('Correct!!!!! I LOVE IT');
    return score[4] = 1;
  } else {
    // console.log('Wrong!');
    alert('Wrong!!!!!');
  }
}
console.log(questionFive);

//Question 6
function questionSix() {

  var answer = 7;
  //console.log('Guess a number 1-10, you have 4 attempts');
  alert('Guess a number 1-10, you have 4 attempts');

  for (var i = 0; i < 4; i++) {
    //console.log('Pick a number!');
    var attempt = prompt('Pick a number!');
    attempt = parseInt(attempt);

    if (attempt === answer) {
      //console.log('YAAAY!');
      alert('YAAAY!');
      return score[5] = 1;
    }
    if (attempt > answer) {
      //console.log('Too high, try again!');
      alert('Too high, try again!');
    }
    if (attempt < answer) {
      //console.log('Too low, Try again!');
      alert('Too low, Try again!');
    }
    if (i === 3) {
      //console.log('GAME OVER! The Number Is 7');
      alert('GAME OVER! The Number Is 7');
    }
  }
}

//Question 7

function questionSeven() {
  var states = ['indiana', 'ohio', 'florida', 'virginia', 'georgia'];

  //console.log('Guess a state that I have lived in! You get 6 attempts.');
  alert('Guess a state that I have lived in! You get 6 attempts.');

  for (var s = 0; s <= states.length; s++) {
    //console.log('Try your luck');
    var guess = prompt('Try your luck').toLowerCase();
    if (guess === states[0] || guess === states[1] || guess === states[2] || guess === states[3] || guess === states[4] || guess === states[5]) {
      //console.log('YAAAY! ' + 'Ive lived in ' + states);
      alert('YAAAY! ' + 'Ive lived in ' + states);
      return score[6] = 1;
    } else
      //console.log('Try Again!')
      alert('Try Again!');
    if (s === 5) {
      //console.log('GAME OVER! Ive lived in ' + states);
      alert('GAME OVER! Ive lived in ' + states);
    }
  }
}


questionOne();
questionTwo();
questionThree();
quesionFour();
questionFive();
questionSix();
questionSeven();

alert('You got ' + (Number(score[0]) + Number(score[1]) + Number(score[2]) + Number(score[3]) + Number(score[4]) + Number(score[5]) + Number(score[6])) + ' out of ' + score.length);


