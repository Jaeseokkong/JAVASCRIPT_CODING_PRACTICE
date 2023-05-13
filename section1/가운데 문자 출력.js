function solution(s){  
    let answer = "";
    let center = s.length / 2 - 1;

    if(s.length % 2 == 0) answer = s.substring(Math.floor(center), 1) + s.substring(Math.round(center), 1);
    else answer = s.substring(Math.round(center), 1);

    return answer;
}
console.log(solution("study"));