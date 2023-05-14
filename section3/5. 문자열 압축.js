function solution(str){
    let answer = "";
    let count = 1;
    let word = "";

    for(let x of str){
        if(x !== word){
            if(count !== 1){
                answer += count;
            }
            word = x;
            answer += x;
            count = 1;
        }else {
            count ++;
        }

        console.log(answer)
    }

    return answer;
}

function solution2(str){
    let answer = "";
    let cnt = 1;
    str = str + " ";

    for(let i=0; i<str.length - 1; i ++){
        if(str[i]===str[i+1] ) cnt ++
        else{
            answer += str[i];
            if(cnt>1)answer +=String(cnt);
            cnt=1
        }
    }


    return answer;
}
let str="KKHSSSSSSSE";
console.log(solution2(str));