function solution(s){
    let answer;
    while(s.indexOf("()") >= 0){
       s = s.replaceAll("()", "")
    }
    answer = s === "" ? "YES" : "NO";

    return answer;
}

function solution2(s){
    let answer = "YES"; 
    let stack = [];
    
    for(let x of s){
        if(x==="(") stack.push(x)
        else {
            if(stack.lenght == 0) return "NO";
            stack.pop();
        }
    }
    
    if(stack.length > 0) return "NO";

    return answer;
}


let a="(()(()))(()((((";
console.log(solution2(a));