function solution(str){
    let answer = 0;
    for(let x of str){
        const upper = x.toLowerCase(); 
        if(upper != x)answer++;
    };
    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));