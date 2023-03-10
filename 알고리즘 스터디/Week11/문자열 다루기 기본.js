// [PGS] 문자열 다루기 기본, +9
// 소요시간 11.44분

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.6MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.6MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.4MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.04ms, 33.5MB)
// 테스트 12 〉	통과 (0.03ms, 33.4MB)
// 테스트 13 〉	통과 (0.03ms, 33.4MB)
// 테스트 14 〉	통과 (0.04ms, 33.4MB)
// 테스트 15 〉	통과 (0.04ms, 33.4MB)
// 테스트 16 〉	통과 (0.04ms, 33.5MB)
// 테스트 17 〉	통과 (0.06ms, 33.5MB)
// 테스트 18 〉	통과 (0.04ms, 33.4MB)
// 테스트 19 〉	통과 (0.04ms, 33.4MB)
// 테스트 20 〉	통과 (0.04ms, 33.4MB)
// 테스트 21 〉	통과 (0.04ms, 33.4MB)
// 테스트 22 〉	통과 (0.04ms, 33.4MB)
// 테스트 23 〉	통과 (0.04ms, 33.6MB)
// 테스트 24 〉	통과 (0.04ms, 33.4MB)
// 테스트 25 〉	통과 (0.04ms, 33.5MB)
// 테스트 26 〉	통과 (0.04ms, 33.4MB)
// 테스트 27 〉	통과 (0.04ms, 33.4MB)
// 테스트 28 〉	통과 (0.03ms, 33.6MB)
// 테스트 29 〉	통과 (0.03ms, 33.5MB)
// 테스트 30 〉	통과 (0.04ms, 33.4MB)

// (실패) 시도 1 -> Number  변환 후 길이가 4이거나 6이라면 
// Number 변환 시 문자열일 경우 NaN이 나올것이기 때문에 isNaN 메서드로 검사 시도 
// -> 첫 문자가 숫자형이라면 NaN이 나오지 않음

// (성공) 시도 2 -> split 이용 배열로 변환 후 map 메서드를 이용해 각 요소마다 형변환 시도
// 숫자형태가 아닌 문자인 경우 NaN 반환 , 배열 내 NaN이 존재하는지 판별! 

// + 다른사람 풀이로 알아낸 것 
// isNaN 이용 시 굳이 형변환 하지 않아도 알아낼 수 있음 
// '1e22'와 같은 지수형식이나, 16진법 형식에서는 isNaN으로 알아낼 수 없음 

function solution(s) {
  //     let trans = Number(s);
      
      if(s.length !== 4 && s.length !== 6) return false; 
  //     return Number.isNaN(trans) !== true ? true : false ;
      
      let arr = s.split('').map(Number);
      
      if(arr.includes(NaN)) return false;
      else return true; 
  }