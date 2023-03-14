// [PGS] 소수 찾기, +10🫢

// 에라토스테네스의 체 사용 !

// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.19ms, 33.6MB)
// 테스트 3 〉	통과 (0.21ms, 33.5MB)
// 테스트 4 〉	통과 (0.26ms, 33.5MB)
// 테스트 5 〉	통과 (0.22ms, 33.5MB)
// 테스트 6 〉	통과 (0.87ms, 33.4MB)
// 테스트 7 〉	통과 (0.37ms, 33.5MB)
// 테스트 8 〉	통과 (0.68ms, 33.5MB)
// 테스트 9 〉	통과 (0.98ms, 33.6MB)
// 테스트 10 〉	통과 (11.06ms, 38.6MB)
// 테스트 11 〉	통과 (26.41ms, 43.1MB)
// 테스트 12 〉	통과 (11.56ms, 38.9MB)
// 효율성  테스트
// 테스트 1 〉	통과 (29.00ms, 43.6MB)
// 테스트 2 〉	통과 (55.47ms, 43MB)
// 테스트 3 〉	통과 (55.79ms, 43.3MB)
// 테스트 4 〉	통과 (52.36ms, 43MB)

function solution(n) {
  let arr = new Array(n+1).fill(true);
  let count = 0;
  
  arr[0] = false;
  arr[1] = false;
  
  const sqrt = Math.floor(Math.sqrt(n));
  
  for(let i = 2; i <= sqrt; i++){
      if(arr[i]){
          num = 2; 
          
          while(i*num <= n){
              arr[i*num] = false;
              num++;
          }
      }
  }
  
  arr.forEach(el => {
      if(el) count++;
  })
  
  return count;
  
}