//문제 의도
//반복문을 통해서 누적구하기
function solution(n){
    let answer=0;
    for(let i = 1; i <= n; i++){
        answer += i;
    }
    return answer;
}
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
