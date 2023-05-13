function solution(arr){
    let answer = 0;
    let sum3 = 0;
    let sum4 = 0;

    for(let i = 0 ; i < arr.length; i++){
        let sum1 = 0;
        let sum2 = 0;
        for(let j = 0; j < arr.length; j ++){
            sum1 += arr[i][j]
            sum2 += arr[j][i]
        }

        answer = Math.max(answer, sum1, sum2)
        
        sum3 += arr[i][i]
        sum4 += arr[arr.length -1 - i][arr.length -1 - i]
    }

    answer = Math.max(answer, sum3, sum4)

    return answer;
}


let arr=[[10, 13, 10, 12, 15], 
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(solution(arr));