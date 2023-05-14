
function solution(str){
    let answer = "YES";
    str = str.toLowerCase().replace(/[^a-z]/g, "");
    const n = str.length

    for(let i = 0; i < Math.round(n / 2); i ++){
        if(str[i] != str[n - 1 - i])return "NO";
    }
    return answer;
}

function solution2(str){
    let answer = "YES";
    str = str.toLowerCase().replace(/[^a-z]/g, "");
    const n = str.length

    if(str.split("").reverse().join("") != str) return "NO";
    return answer;
}



let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution2(str));