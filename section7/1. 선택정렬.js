function solution(arr){
    let answer;

    //버블정렬
    for(let i = 0; i < arr.length - 1; i ++){
        for(let j = i + 1; j < arr.length; j ++){
            const standard = arr[i]
            const target = arr[j]
            if(standard > target){
                const temp = target;
                arr[j] = standard;
                arr[i] = temp;
            }
            console.log(arr)

        }
    }

    answer = arr

    return answer;
}

//선택정렬
function solution2(arr){
    //얕은 복사
    let answer = arr;

    for(let i = 0; i < arr.length - 1; i ++){
        let idx = i;
        for(let j = i + 1; j < arr.length; j ++){
            if(arr[idx] > arr[j]) idx = j
        }
        if(i !== idx){
            [arr[i], arr[idx]] = [arr[idx], arr[i]]

        }
       
        console.log(arr)
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution2(arr));