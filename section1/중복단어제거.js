function solution(s){  
    let answer = [];

    // for(let i = 0; i < s.length; i ++){
    //     console.log(s[i], i, s.indexOf(s[i]))
    //     if(i == s.indexOf(s[i])) answer.push(s[i])
    // }

    answer = s.filter((value, index) => {
        if(s.indexOf(value) == index) return true;
    })

    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));