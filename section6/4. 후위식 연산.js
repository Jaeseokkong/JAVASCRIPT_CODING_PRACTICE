function solution(s){  
    let answer; 
    const stack = [];

    for(let x of s){
        console.log(parseInt(x))
        if(!parseInt(x)){
            let result = 0;
            if(x === "*") result = stack.pop() * stack.pop();
            else if(x==="/") result = stack.pop() * 1 / stack.pop()  ;
            else if(x==="-") result =  - stack.pop() + stack.pop();
            else result = stack.pop() + stack.pop();

            stack.push(result)
        }else stack.push(parseInt(x))
        console.log(stack)
    }

    answer = stack.pop()
    return answer;
}

function solution2(s){  
    let answer; 
    const stack = [];
    for(let x of s){
        if(!isNaN(x))stack.push(Number(x));
        else {
            let rt = stack.pop();
            let lt = stack.pop();
            if(x==="+") stack.push(lt + rt)
            else if(x==="-") stack.push(lt - rt)
            else if(x==="*") stack.push(lt * rt)
            else if(x==="/") stack.push(lt / rt)

        }

    }

    answer = stack[0]

   
    return answer;
}

let str="352+*9-";
console.log(solution2(str));