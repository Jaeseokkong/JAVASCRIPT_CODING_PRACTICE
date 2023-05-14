function solution(n, k, card){
    let answer;
    let sumList = []

    for(let i = 0; i < card.length - 2; i++){
        const first = card[i];
        for(let j = i + 1; j < card.length - 1; j ++){
            const second = card[j]
            for(let x = j + 1; x < card.length; x++){
                const third = card[x]
                const sum = first + second + third;
                if(sumList.indexOf(sum) < 0 ) sumList.push(sum)
            }
        }
    }

    answer = sumList.sort((a, b) => b - a)[k - 1]
    return answer;
}

//중복 제거 set 자료 활용

function solution2(n, k, card){
    let answer;
    let tmp = new Set();
    for(let i = 0; i < n - 2; i++){
        for(let j = i + 1; j < n - 1; j ++){
            for(let k = j + 1; k < n; k++){
                tmp.add(card[i] + card[j] + card[k])
            }
        }
    }
    let a = Array.from(tmp).sort((a , b) => b - a)
    answer = a[k - 1]
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution2(10, 3, arr));