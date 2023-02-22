const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input.txt').toString();

let result = 1;

function recursion(num) {
  // base case
  if (num <= 1) {
    return (result *= 1);
  }

  result *= num;
  num--;
  recursion(num);
}

recursion(Number(input));

console.log(result);
