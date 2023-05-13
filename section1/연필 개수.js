//문제 의도
//12개의 한 묶음으로 학생수를 나눈 몫을 올림 계산
function solution(n){
    let answer=Math.ceil(n/12);
    return answer;
}

console.log(solution(178));