//[PGS] 피로도
// 정확성  테스트
// 테스트 1 〉	통과 (0.23ms, 33.5MB)
// 테스트 2 〉	통과 (0.22ms, 33.4MB)
// 테스트 3 〉	통과 (0.22ms, 33.3MB)
// 테스트 4 〉	통과 (0.54ms, 33.6MB)
// 테스트 5 〉	통과 (2.78ms, 37.7MB)
// 테스트 6 〉	통과 (5.00ms, 38.1MB)
// 테스트 7 〉	통과 (5.95ms, 38.1MB)
// 테스트 8 〉	통과 (8.58ms, 38.1MB)
// 테스트 9 〉	통과 (0.22ms, 33.4MB)
// 테스트 10 〉	통과 (2.27ms, 37.7MB)
// 테스트 11 〉	통과 (0.20ms, 33.5MB)
// 테스트 12 〉	통과 (6.11ms, 38.2MB)
// 테스트 13 〉	통과 (0.64ms, 33.7MB)
// 테스트 14 〉	통과 (0.38ms, 33.5MB)
// 테스트 15 〉	통과 (0.25ms, 33.6MB)
// 테스트 16 〉	통과 (0.26ms, 33.5MB)
// 테스트 17 〉	통과 (0.35ms, 33.6MB)
// 테스트 18 〉	통과 (0.22ms, 33.3MB)
// 테스트 19 〉	통과 (0.29ms, 33.6MB)

function solution(k, dungeons) {
  const len = dungeons.length;
  const isVisited = new Array(len).fill(false); // 방문여부 확인
  let maxClear = 0; // 최대 던전 탐험 횟수

  const dfs = (k, currClear) => {
    maxClear = Math.max(currClear, maxClear); // 최대 던전 탐험 횟수 업데이트

    for (let i = 0; i < len; i++) {
      // 모든 던전을 탐험하도록 하는 반복문
      let [min, cons] = dungeons[i]; // i번째 던전을 먼저 도는 경우의 최소 피로도와 소모피로도

      if (!isVisited[i] && k >= min) {
        // 던전 입장 가능한 조건이며, 던전에 방문한 적이 없다면
        isVisited[i] = true; // 방문표시
        dfs(k - cons, currClear + 1); // i던전 방문 후의 피로도 값을 이용해 다른 던전 탐험
        isVisited[i] = false; // i 번째가 첫번째 방문일때의 경우를 종료 -> 초기화
      }
    }
  };

  dfs(k, 0);

  return maxClear;
}
