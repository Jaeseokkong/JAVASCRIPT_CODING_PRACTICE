function solution(s){  
    let answer = "";
    const stack = [];

    for(let x of s){
        if(x==="(") stack.push(x)
        else if(x === ")") stack.pop();
        else{
            if(stack.length == 0) answer += x;
        }
    }


    return answer;
}


function solution(s){  
    let answer = "";
    const stack = [];

    for(let x of s){
        if(x===")"){
            while(stack.pop() !== "(");
        }else stack.push(x);

        console.log(stack);
    }

   
    answer = stack.join("")

    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));