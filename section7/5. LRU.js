function solution(n , arr){
    let answer = Array.from(5, 0)
    for(let x of arr){
        let position = answer.indexOf(x)
        if(position < 0){
            answer.pop()
            answer.unshift(x)
        }else{
            for(let i = position; i > 0; i--){
                let tmp = answer[i]
                answer[i] = answer[i - 1];
                answer[i - 1] = tmp
            }
        } 
    }


    return answer;
}

// 강의 설명 들은 후 풀이 
function solution2(n , arr){
    let answer = Array.from({length : n}, (v, i) => 0)
    
    for(let x of arr){
        let j = n - 1;
        if(!(answer.indexOf(x) < 0)) j = answer.indexOf(x)
        
        console.log(j)
        for(; j > 0; j --){
            [answer[j], answer[j - 1]] = [answer[j - 1], answer[j]]
            console.log(answer)
        }

        if(j == 0)answer[0] = x
       
        console.log(answer)

    }


    return answer;
}

function solution3(size , arr){
    let answer = Array.from({length : size}, () => 0)
  
    arr.forEach(x => {
        let pos = -1;
        for(let i = 0; i<size; i ++) if(x===answer[i]) pos = i;

        //기존 캐시메모리에 없는 경우
        if(pos===-1){
            for(let i = size -1; i >= 1; i--){
                answer[i]=answer[i-1];
            }
        //기존 메모리에 있는 경우
        }else{
            for(let i = pos; i >= 1; i--){
                answer[i]=answer[i-1];
            }
        }
        answer[0] = x;
    })

    return answer;
}

function solution4(size , arr){
    let answer = [];
  
    arr.forEach(x => {
        let pos = -1;
        for(let i = 0; i<size; i ++) if(x===answer[i]) pos = i;

        if(pos===-1){
            answer.unshift(x)
            if(answer.length > size) answer.pop();
        }else{
            answer.splice(pos, 1)
            answer.unshift(x)
        }
        
    })

    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution4(5, arr));
