function solution(n, info) {
  let maxDiff = 0;  // max_gap
  let ryonInfo = Array(11).fill(0);  // 라이언의 쏘기 전 점수판
  
  // 화살 쏘는 함수
  const shot = (peachScore, ryonScore, count, idx, board) => {
      console.log("입력")
      console.log(peachScore, ryonScore, count, idx, board)
    if(n < count) return // 다 쏘면 리턴 
    if(idx > 10){ // 배열의 인덱스 의미
      console.log("여기4")
      console.log(peachScore, ryonScore, count, idx, board)
      let diff = ryonScore - peachScore; // 라이언과 어피치의 점수차
      console.log(diff) 
      if(diff > maxDiff){ // 점수 차를 가장 큰 점수차가 난 것과 비교 
        board[10] = n - count; // 남은 횟수 0점에 몰아넣기! 
        maxDiff = diff // 가장 큰 차이의 점수 구한것 
        ryonInfo = board; // 라이언 결과에 점수판 넣어!
      }
      return;
    }
    if(n > count) { // 쏘는 횟수가 n보다 작으면 (쏠 수 있음)
      let board2 = [...board]; // 점수판 2에 점수판을 넣어
      console.log("여기1")
      board2[10 - idx] = info[10 - idx] + 1; // 어피치 보다 점수를 많이 받기위해
      console.log(peachScore, ryonScore, count, idx, board2)
      // 재귀함수 호출
      shot(peachScore, ryonScore + idx, count + info[10 - idx] + 1, idx + 1, board2);
    }
    
    if(info[10 - idx] > 0){ // 
      console.log("여기2")
      console.log(peachScore, ryonScore, count, idx, board)
      shot(peachScore + idx, ryonScore, count, idx + 1, board)
    } else {
      console.log("여기3")
      console.log(peachScore, ryonScore, count, idx, board)
      shot(peachScore, ryonScore, count, idx + 1, board)
    }
  }

  shot(0, 0, 0, 0, ryonInfo) 
  
  if(maxDiff <= 0) return [-1]; // 최대차이가 0보다 작거나 같으면 -1리턴 (이길 수 없음)
  else return ryonInfo; // 최대차이가 0보다 크면 라이언 승리-> 라이언 점수판 리턴 
}

let n = 5
let info = [2,1,1,1,0,0,0,0,0,0,0]

console.log(solution(n,info))