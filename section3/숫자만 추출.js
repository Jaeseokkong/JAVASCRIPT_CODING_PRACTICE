//문자만 지우고 숫자만 남긴 문자열을 자연수로 변경
//정규식 사용, 문자열 -> 숫자로 형변환
function solution(str){
    let answer;
    str = str.replace(/[A-z]/g, "");
    answer = Number(str)
    return answer;
}

//강의 정답
function solution2(str){
    let answer = "";
    for(let x of str){
        if(!isNaN(x)) answer += x;
    }
    return parseInt(answer);
}
let str="g0en2T0s8eSoft";
console.log(solution(str));