function solution(arr){
    let answer = arr;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return answer;
}

function solution2(arr){
    let answer = arr;

    for(let i = 0; i < arr.length; i ++){
        let tmp = arr[i], j;
        console.log(tmp)
        for(j = i - 1; j>= 0; j --){
            if(arr[j] > tmp) arr[j+1] = arr[j];
            else break;
        }

        arr[j + 1] = tmp;
    }

    return answer;
}
let arr=[11, 7, 5, 6, 10, 9];
console.log(solution2(arr));