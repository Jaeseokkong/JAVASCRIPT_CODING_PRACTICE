function solution(arr){
    let answer = 0;
    let point = 1;

    arr.forEach((value) => {
        if(value === 1){
            answer += point
            point++
        }else point = 1;
    })


    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));