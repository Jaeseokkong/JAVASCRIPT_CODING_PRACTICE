function solution(arr){
    let answer = 0;
    let n = arr.length

    for(let i = 0; i < n; i ++){
        for(let j = 0; j < n; j ++){
            let center = arr[i][j];
            let left = 0;
            let right = 0;
            let top = 0;
            let bottom = 0;

            if(i > 0){top = arr[i - 1][j]}
            if(j > 0){left = arr[i][j - 1];}
            if(i < n -1){bottom = arr[i + 1][j]}
            if(j < n -1){right = arr[i][j + 1]}

            if(center > left & center > right & center > top & center > bottom){ answer ++; }
        }
    }



    return answer;
}
let arr=[[5, 3, 7, 2, 3], 
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr));