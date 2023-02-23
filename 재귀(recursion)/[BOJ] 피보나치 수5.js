const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input.txt').toString();

function fibonacci(num) {
  if (num === 0) return 0;
  if (num <= 2) return 1;

  return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log(fibonacci(Number(input)));
