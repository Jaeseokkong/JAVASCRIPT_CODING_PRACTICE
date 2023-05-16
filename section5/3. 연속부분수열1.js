function solution(m, arr){
    let answer = 0;

    //시작점
    for(let i = 0; i < arr.length -1; i++){
        //끝나는 점
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum += arr[j];
            if(sum === m){
                answer++
                break;
            } 
        }
    }
    

    return answer;
}


function solution2(m, arr){
    let answer = 0 , lt=0, sum=0;
    for(let rt=0; rt < arr.length; rt++){
        sum+=arr[rt]
        if(m === sum) answer ++;
        while(sum>= m){
            sum-=arr[lt++]
            if(sum ===m) answer++
        }
    }


    return answer;
}




let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution2(6, a));