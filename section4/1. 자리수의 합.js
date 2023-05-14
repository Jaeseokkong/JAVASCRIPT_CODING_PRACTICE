function solution(num, arr){
    let answer = 0;
    let sum = 0;

    arr.forEach((value) => {
        let current = value
        let cSum = 0;
        while(current > 0){
            cSum += current % 10;
            current = Math.floor(current / 10);
        }

        if(sum <= cSum && answer < value){ answer = value ; sum = cSum};
    })


    return answer;
}

function solution2(num, arr){
    let answer, max =Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum = 0, tmp=x;
        while(tmp){
            sum+=(tmp%10);
            tmp=Math.floor(tmp/10);
        }
        if(sum > max){
            max=sum;
            answer=x;
        }
        else if(sum === max) {
            if(x>answer)answer =x;
        }
    }


    return answer;
}


function solution3(num, arr){
    let answer, max =Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=x.toString().split("").reduce((a, b) => a+Number(b), 0);
        if(sum > max){
            max=sum;
            answer=x;
        }
        else if(sum === max) {
            if(x>answer)answer =x;
        }
    }


    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution3(7, arr));