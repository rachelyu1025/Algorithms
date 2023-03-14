//[PGS] 프린터, +5

// 테스트 1 〉	통과 (0.29ms, 33.5MB)
// 테스트 2 〉	통과 (0.48ms, 33.5MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.22ms, 33.6MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.20ms, 33.6MB)
// 테스트 7 〉	통과 (0.30ms, 33.4MB)
// 테스트 8 〉	통과 (0.65ms, 33.6MB)
// 테스트 9 〉	통과 (0.22ms, 33.4MB)
// 테스트 10 〉	통과 (0.21ms, 33.4MB)
// 테스트 11 〉	통과 (0.33ms, 33.5MB)
// 테스트 12 〉	통과 (0.22ms, 33.5MB)
// 테스트 13 〉	통과 (0.53ms, 33.5MB)
// 테스트 14 〉	통과 (0.06ms, 33.6MB)
// 테스트 15 〉	통과 (0.22ms, 33.4MB)
// 테스트 16 〉	통과 (0.26ms, 33.4MB)
// 테스트 17 〉	통과 (0.65ms, 33.5MB)
// 테스트 18 〉	통과 (0.16ms, 33.4MB)
// 테스트 19 〉	통과 (0.34ms, 33.6MB)
// 테스트 20 〉	통과 (0.18ms, 33.6MB)

function solution(priorities, location) {
  let lineup = [];
  const arr = priorities.map((el, idx) => [el, idx]);

  while (arr.length) {
    let el = arr.shift();

    if (arr.some((item) => el[0] < item[0])) arr.push(el);
    else {
      if (el[1] === location) return lineup.length + 1;
      lineup.push(el);
    }
  }
}
