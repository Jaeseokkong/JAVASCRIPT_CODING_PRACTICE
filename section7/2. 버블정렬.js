function solution(arr){
    let answer = arr;

    for(let i = 0; i < arr.length - 1; i ++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp
            }
        }
    }

    return answer;
}


function solution2(arr){
    let answer = arr;


    for(let i =0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j ++){
            if(arr[j] > arr[j + 1]){
                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return answer;

}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution2(arr));