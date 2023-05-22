function solution(arr){
    let answer = [];
    let minus = []
    let plus = []


    for(let x of arr){
        if(x < 0) minus.push(x)
        else plus.push(x)
    }

    answer = [...minus, ...plus]

    return answer;
}

//포문 활용
function solution2(arr){
    let answer = arr;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > 0 && arr[j + 1] < 0){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
            console.log(arr)
        }
    }

    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution2(arr));