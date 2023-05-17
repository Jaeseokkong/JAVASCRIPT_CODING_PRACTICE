function solution(n , k){
    let answer;
    const stack = [];

    for(let i = 1; i <= n; i ++){
        stack.push(i)
    }

    while(stack.length > 1){
        for(let i = 0; i < k; i++){
            if(i !== k-1) stack.push(stack.shift())
            else stack.shift()
        }
    }

    answer = stack[0]
    return answer;
}


function solution2(n , k){
    let answer;
    //길이가 n 자리의 배열 생성, i + 1 의 값 넣기
    const queue = Array.from({length : n}, (v, i) => i + 1)

    while(queue.length){
        for(let i = 1; i < k; i ++) queue.push(queue.shift())
        queue.shift();
        if(queue.length === 1) answer = queue.shift();
    }
   
    return answer;
}
console.log(solution2(8, 3));