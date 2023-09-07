//loops in javascript

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 500; i++) {
  console.log(i + 1);
}

// //for loop to print n natural numbers

let sum = 0;

let n = prompt('enter your number : ');

n = Number.parseInt(n);

for (let i = 0; i < n; i++) {
  sum += i + 1;
}

console.log('The sum of the ' + n + 'natural numbers is  ' + sum);

//for in loop

let obj = {
  subham: 90,

  Rittika: 45,

  Krittika: 67,

  Mrittika: 10,
};

for (let a in obj) {
  console.log('Marks  of ' + a + ' is  ' + obj[a]);
}

//for of loop

let onj1 = {
  subham: 99,

  Swarnodip: 99,

  Soumyadeep: 10,

  Sutam: 56,

  Tonmoy: 98,
};

for (let b of 'subham') {
  console.log(b);
}

// let is a block level scope

// if we use var we call use it outside of loop
let sum = 0;
for (var i = 0; i < 8; i++) {
  sum += i + 1;
}

console.log(i);

// creating a function in javascript

function avg(x, y) {
  console.log('Done');
  return 1 + (x + y) / 2;
}

let a = 2;

let b = 4;

let c = 6;

console.log('the average of a and b is ' + avg(a, b));
console.log('the average of b and c is ' + avg(c, b));
console.log('the average of a and c is ' + avg(a, c));

// round of function in javascript

function $avg(x, y) {
  console.log('Time Done ');

  return Math.round(1 + (x + y) / 2);
}

let $a = 2;

let $b = 4;

let $c = 6;

console.log('the average of a and b is ' + avg($a, $b));
console.log('the average of b and c is ' + avg($c, $b));
console.log('the average of a and c is ' + avg($a, $c));

// arrow function

let $obj = (p, q) => {
  return p + q;
};

console.log('the sum of the number is ' + $obj(9, 7));

//function with out any parameter

let $func = () => {
  console.log('Hey Sneha how are you ! I Am fine  dude');
};

// calling the function explecitely

$func();
