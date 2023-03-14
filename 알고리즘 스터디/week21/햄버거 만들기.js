//[PGS] 햄버거 만들기, +8

// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (82.16ms, 66.7MB)
// 테스트 4 〉	통과 (159.56ms, 88.5MB)
// 테스트 5 〉	통과 (195.35ms, 91.9MB)
// 테스트 6 〉	통과 (113.75ms, 69.3MB)
// 테스트 7 〉	통과 (143.17ms, 80MB)
// 테스트 8 〉	통과 (115.95ms, 69.4MB)
// 테스트 9 〉	통과 (91.66ms, 68.3MB)
// 테스트 10 〉	통과 (6.12ms, 38.2MB)
// 테스트 11 〉	통과 (70.65ms, 65MB)
// 테스트 12 〉	통과 (243.00ms, 96.4MB)
// 테스트 13 〉	통과 (0.05ms, 33.5MB)
// 테스트 14 〉	통과 (0.05ms, 33.5MB)
// 테스트 15 〉	통과 (0.05ms, 33.5MB)
// 테스트 16 〉	통과 (0.05ms, 33.5MB)
// 테스트 17 〉	통과 (0.05ms, 33.5MB)
// 테스트 18 〉	통과 (0.06ms, 33.4MB)

// 1차 시도 , 시간초과
//정규표현식과 include메소드 이용

// function solution(ingredient) {
//     const regex = /'1231'/;
//     let count = 0; 
    
//     let str = ingredient.join('');
    
//     while(str.includes('1231')){
//      str.replace(regex, '');
//     count++;
//     }
    
//     return count;
// }

// 2차시도, 힌트 참고하여 스택으로 풀어야함을 알게됨..
function solution(ingredient) {
  let str = ingredient.join('');
  let count = 0; 
  let arr = [];
  
  for(let i=0; i<str.length; i++){
      arr.push(str[i]);
      
      if(arr.length >= 4){
          const check = arr.slice(-4).join('');
          if(check === '1231'){
              arr.pop();
              arr.pop();
              arr.pop();
              arr.pop();      
              count++;
          }
      }
  }   
  
  return count;
}