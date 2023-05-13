//두가지 구해야 함
//반복문을 통해서 홀수의 합과 가장작은 수

function solution(arr){
    let min=Number.MAX_SAFE_INTEGER
    let sum = 0;
    let answer = [];
    
    
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] % 2 !== 0) {
            sum += arr[i]
            if(min > arr[i]) min = arr[i]
        }
    }
    answer = [sum, min];
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));