//[PGS] 두 정수 사이의 합, +1
// 소요시간 : 3.30 분
// 도저히..좋은 방법이 생각이 안난다...
// a,b가 같으면 return a(or b);
// a와 b중 작은 수부터 큰수까지 도는 반복문을 이용하여 result 변수에 하나하나 더해주기 

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (56.08ms, 36.6MB)
// 테스트 5 〉	통과 (16.55ms, 36.8MB)
// 테스트 6 〉	통과 (41.08ms, 36.7MB)
// 테스트 7 〉	통과 (35.68ms, 36.6MB)
// 테스트 8 〉	통과 (39.09ms, 36.6MB)
// 테스트 9 〉	통과 (9.01ms, 36.8MB)
// 테스트 10 〉	통과 (3.77ms, 36.8MB)
// 테스트 11 〉	통과 (0.30ms, 33.5MB)
// 테스트 12 〉	통과 (1.54ms, 36.4MB)
// 테스트 13 〉	통과 (0.33ms, 33.3MB)
// 테스트 14 〉	통과 (0.04ms, 33.4MB)
// 테스트 15 〉	통과 (0.08ms, 33.4MB)
// 테스트 16 〉	통과 (0.15ms, 33.4MB)

function solution(a, b) {

    let result = 0;
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
        result += i; 
    }
    
    return result;
}

// 가우스의 덧셈 공쉭!
// 양 끝 수의 합과 두 수 사이의 존재하는 수의 개수의 절반을 곱하면 합이 나온다..!
// So 간단!!
function solution(a, b) {

    return (a + b) * (Math.abs(a - b)+1) /2;
}