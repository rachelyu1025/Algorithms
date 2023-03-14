const fs = require('fs');
const { array } = require('prop-types');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

input.shift();

console.log(input);
// function isPalindrome(str) {
//   let count = 0;

//   if (str[0] !== str[str.length - 1]) return `${recursion(str)} ${count}`;

//   function recursion(str) {
//     count++;

//     if (str.length <= 1) return 1;

//     if (str[0] !== str[str.length - 1]) return 0;

//     str = str.slice(1, str.length - 1);
//     return recursion(str);
//   }

//   return `${recursion(str)} ${count}`;
// }

function isPalindrome(str) {
  let count = 0;

  if (str[0] !== str[str.length - 1]) return recursion(str, count);

  return recursion(str, count);
}

function recursion(str, cnt) {
  cnt++;

  if (str.length <= 1) return `1 ${cnt}`;

  if (str[0] !== str[str.length - 1]) return `0 ${cnt}`;

  str = str.slice(1, str.length - 1);
  return recursion(str, cnt);
}

// input.map((el) => console.log(isPalindrome(el)));
// for (let i = 0; i < input.length; i++) {
//   console.log(isPalindrome(input[i]));
// }
