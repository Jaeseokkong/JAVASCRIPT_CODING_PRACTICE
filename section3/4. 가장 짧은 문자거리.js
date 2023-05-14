//t의 위치를 구하고
//문자하나당 t의 index의 위치를 뺀 절대값을 비교하여 가장 작은 값을 리스트에 추가

function solution(s, t){
    let answer = [];
    let tIndexList = [];
    s = s.split("");

    s.forEach((value, index) => {
        if(value == t) tIndexList.push(index);
    })
    
    s.forEach((value, index) => {
        let indexList = []
        tIndexList.forEach((value2, index2) => {
            indexList.push(Math.abs(index - value2))
        })
        answer.push(Math.min(...indexList))
    })

    return answer;
}


//정답 포문을 앞-> 뒤 , 뒤 -> 앞으로 한번 돈다

function solution2(s, t){
    let answer = [];
    let p = 1000;
    for(let x of s){
        if(x === t){
            p=0;
            answer.push(p)
        }else{
            p++
            answer.push(p)
        }
    }
    
    p=1000;
    for(let i = s.length - 1 ; i >= 0 ; i--){
        if(s[i]===t){
            p=0;
        }
        else {
            p++;
            answer[i]=Math.min(answer[i], p)
        }
    }

   
    return answer;
}


let str="teachermode";
console.log(solution2(str, 'e'));