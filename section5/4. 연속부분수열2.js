function solution(m, arr){
    let answer = 0, rt=0;

    for(let lt = 0; lt < arr.length; lt ++){
        let sum = 0;
        rt = lt;
        while(sum <= m){
            sum += arr[rt]            
            if(sum <= m){
                answer ++
            }
            if(rt != arr.length -1) rt++
            else break;
        }
        
    }   

    return answer;
}


// rt 가 증가하면 경우의 수만큼 더해줘야함 (rt - lt + 1)
function solution2(m, arr){
    let answer = 0, lt = 0, sum = 0;
    for(let rt =0; rt < arr.length; rt++){
        sum += arr[rt]
        while(sum > m){
            sum -= arr[lt++]    
        }     
        answer += (rt - lt + 1);
        
    }


    return answer;
}



let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));