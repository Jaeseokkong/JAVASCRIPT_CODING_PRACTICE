function solution(str, c){
    let answer = 0;
    for(let x of str) if(x === c)  answer += 1;
    return answer;
}
console.log(solution("COMPUTERPROGRAMMING", "R"));