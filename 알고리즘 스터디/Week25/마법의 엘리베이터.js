//[PGS] 마법의 엘리베이터

function solution(storey) {
  let answer = 0;

  while (storey) {
    // 0이 될 때 까지 반복
    let remain = storey % 10;

    // 5 초과인 경우, 층수를 미리 올려주고 10에서 나머지를 뺀만큼 계산해주는 것이 마법의 돌을 덜 쓰는 방법
    // 5 미만인 경우, 층수 그대로 내려가도록 나머지 자체를 더해준다.
    // 5와 같은 경우, 나머지인 5는 그대로 더해주고, 5의 앞자리가 5이상이라면 층수를 올려주는 것과 같이 10을 더해준다.
    if (remain > 5) {
      answer += 10 - remain;
      storey += 10;
    } else if (remain < 5) {
      answer += remain;
    } else {
      if (parseInt(storey / 10) % 10 > 4) storey += 10;
      answer += remain;
    }
    storey = parseInt(storey / 10); // 나머지 제외 10이상의 단위를 구하는 연산
  }
  return answer;
}
