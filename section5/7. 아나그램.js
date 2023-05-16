function solution(a, b){
    let answer = 'YES';
    let aMap = new Map();
    let bMap = new Map();

    for(let x of a){
        if(aMap.has(x)) aMap.set(x, aMap.get(x) + 1)
        else aMap.set(x , 1)
    }

    for(let x of b){
        if(bMap.has(x)) bMap.set(x, bMap.get(x) + 1)
        else bMap.set(x , 1)
    }

    aMap.forEach((value , key) => {
        if(!bMap.has(key) || value !== aMap.get(key)) answer = "NO"
    })


    return answer;
}

//포문을 최소화 하자
function solution2(str1, str2){
    let answer = 'YES';
    let sH = new Map();
    
    for(let x of str1){
        if(sH.has(x)) sH.set(x , sH.get(x) + 1)
        else sH.set(x , 1)
    }

    for(let x of str2){
        if(!sH.has(x) || sH.get(x) === 0) return "NO"
        sH.set(x , sH.set(x, sH.get(x) - 1))
    }
    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution2(a, b));