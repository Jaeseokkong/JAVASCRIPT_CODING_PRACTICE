function solution(str){
    let answer = str.replaceAll("A" , "#");
    return answer;
}

let str="BANANA";
console.log(solution(str));