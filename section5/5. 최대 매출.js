function solution(k, arr){
    let answer = 0;
    let sum = 0;
    let lt = 0;


    for(let rt = 0; rt < arr.length; rt++){
        sum += arr[rt];
        if(rt > k - 1){
            sum -= arr[lt++]
            if(sum > answer) answer = sum;
        }
        
        console.log("lt:" , lt , " ",  "rl:" , rt, " , sum=",sum);
        
    }

    return answer;
}

function solution2(k, arr){
    let answer, sum = 0;
    //처음 3일의 합
    for(let i = 0; i < k; i++)sum += arr[i]
    answer = sum;

    for(let i=k; i < arr.length; i++){
        sum += (arr[i] - arr[i-k]);
        answer = Math.max(answer, sum);
    }

    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution2(3, a));