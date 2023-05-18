function solution(a, b){
    let answer = "YES";
    const stack = b.split("")

    for(let i =0; i < a.length; i++){
        let result = ""
        while(a[i] !== result && stack.length > 0){
            result = stack.shift();
            if(i != a.length - 1 && stack.length == 0) answer = "NO"
        }
    }

    return answer;
}


function solution2(need, plan){
    let answer = "YES";
    let queue=need.split("");

    for(let x of plan){
       if(queue.includes(x)){
            if(x !== queue.shift()) return "NO"
       }

    }
    if(queue.length>0) answer = "NO"

    return answer;
}
let a="CBA";
let b="CDBEDDDDEEE";
console.log(solution2(a, b));