
const solution = (n, info) => {
    let answer = []; // 라이언의 결과를 담을 배열 
    let score = 0;    // 가장 큰 점수 차 

    const dfs = (index, remain, board) => { // index와 , 남은 횟수, 점수판을 전달
        if(remain < 0) return;// 만약 남은 횟수가 없으면 끝낸다.(리턴)

        if(remain === 0){ // 만약 남은 횟수가 0이면 라이언과 어피치 점수비교를 진행한다. 
            let rScore = 0;
            let aScore = 0;

            for(let i = 0; i < 11; i++){ //10개의 모든 요소를 돌 것
                if(info[i] === 0 && board[i] === 0) continue; //어피치와 라이언 모두 쏘지 않았다면 넘긴다. 
                // 모두 쏘지 않은게 아니라면 
                const diff = info[i] - board[i]; // 어피치의 맞춘 과녁 수와 라이언의 맞춘 과녁 수 차이를 구한다. 

                if(diff >= 0){ // 만약 차이가 양수라면 
                  aScore += (10 - i); // 어피치가 점수를 가져감 
                } else if(diff < 0){ // 차이가 음수라면 
                rScore += (10 - i); // 라이언이 점수를 가져감
                }
            }

            const diff = rScore - aScore; // 라이언의 점수에서 어피치의 점수를 뺀 차를 diff에 저장

            if(score === diff){ // 가장 큰 점수 차와 방금 구한 차이를 비교, 같다면 
                // 배열을 뒤집어 문자열로 변환 후 비교 -> 작은 수가 더 많은 걸 찾아낼 수 있음 
                const aReverse = [...answer].reverse().join("");
                const bReverse = [...board].reverse().join("");

                if(aReverse < bReverse){ // answer(기존 저장된 배열)이 board보다 작다면 
                    answer = [...board];    // answer의 값을 board로 변경 
                }
            } else if(score < diff){ // 가장 큰 점수 차보다 구한 차이가 더 크다면 
                answer = [...board]; // 
              score = diff;
          }
              
          return;
      }
      
      for(let i = index; i < 11; i++){
          const origin = board[i];
          
          for(let j = info[i] + 1; j >= 0; j--){
              board[i] = j;
              dfs(i + 1, remain - j, board);
          }
          board[i] = origin;
      }
  }
  
  for(let i = 0; i < 11; i++){
      const board = Array(11).fill(0);
      
      board[i] = info[i] + 1;
      dfs(i + 1, n - board[i], board);
  }
  
  return score === 0 ? [-1] : answer;
}