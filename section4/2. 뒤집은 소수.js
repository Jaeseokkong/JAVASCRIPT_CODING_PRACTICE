function solution(arr){
    let answer = [];

    for(let x of arr){
        x = parseInt(x.toString().split("").reverse().join(""));
        if(x == 2){
            answer.push(x);
            continue;
        } 
        for(let i = 2; i <= Math.round(x / 2) ; i++){
           if(x % i === 0) break;
           if(i === Math.round(x / 2)) answer.push(x);
        }
    }

    return answer;
}

function isPrime(num){
    if(num===1)return false;
    for(let i = 2; i<= parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}


function solution2(arr){
    let answer = [];
    for(let x of arr){
        let res=0;
        while(x){
            let t = x%10;
            res=res*10 + t;
            x=parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res)

    }

    return answer;
}



function solution3(arr){
    let answer = [];
    for(let x of arr){
        let res = Number(x.toString().split("").reverse().join(""));
        console.log(res)
        if(isPrime(res)) answer.push(res)

    }

    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution3(arr));