//[PGS] 피보나치 수, +6
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.7MB)
// 테스트 6 〉	통과 (0.11ms, 33.5MB)
// 테스트 7 〉	통과 (0.22ms, 33.5MB)
// 테스트 8 〉	통과 (0.18ms, 33.6MB)
// 테스트 9 〉	통과 (0.15ms, 33.5MB)
// 테스트 10 〉	통과 (0.23ms, 33.4MB)
// 테스트 11 〉	통과 (0.15ms, 33.7MB)
// 테스트 12 〉	통과 (0.16ms, 33.4MB)
// 테스트 13 〉	통과 (4.89ms, 39.1MB)
// 테스트 14 〉	통과 (4.68ms, 39MB)

// 재귀함수로 풀었다가 시간초과되어 for문으로 다시 풀이함
function solution(n) {
  let fiboNums = [0,1,1]; // 0,1,2는 고정된 값이므로 
  
  for(let i = 3; i <= n; i++){
      fiboNums.push((fiboNums[i-2]+fiboNums[i-1]) % 1234567); //반복하다보면 자바스크립트에서 다루지 못하는 큰 수가 나오기 때문
  }
  
  let total = (fiboNums[n-2] + fiboNums[n-1]) % 1234567; 
  
  return total;
}