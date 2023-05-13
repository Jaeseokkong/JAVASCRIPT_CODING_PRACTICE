function solution(s){  
    let answer=s;

    for(let i = 0; i < answer.length; i++){
        const t = answer.substring(i , i+1);
        if(answer.lastIndexOf(t) != i) {
            answer = answer.substring(0 , answer.lastIndexOf(t)) + answer.substring(answer.lastIndexOf(t) + 1)
            i--
        }

    }

    return answer;
}
console.log(solution("ksekksetk"));