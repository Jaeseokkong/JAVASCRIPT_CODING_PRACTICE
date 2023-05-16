function solution(str){
    let answer;
    let max = ["", 0];
    let map = new Map();

    for(let x of str){
        if(map.get(x)) map.set(x, map.get(x) + 1)
        else map.set(x , 1)
        if(max[1] < map.get(x)) max = [x , map.get(x)]

    }

    answer = max[0]
    return answer;
}
function solution2(s){
    let answer;
    let sH = new Map();
    for(let x of s){
        if(sH.has(x)) sH.set(x, sH.get(x) + 1)
        else sH.set(x, 1);
    }
    let max = Number.MIN_SAFE_INTEGER;

    for(let [key, val] of sH){
        if(val > max){
            max=val;
            answer=key;
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution2(str));
