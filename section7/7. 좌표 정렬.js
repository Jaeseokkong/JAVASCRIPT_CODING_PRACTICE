function solution(arr){
    let answer = arr;

    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length; j ++){
            if(arr[i][0] < arr[j][0] || (arr[i][0]===arr[j][0] && arr[i][1] < arr[j][1])){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }

    return answer;
}


//좌표 정렬방법
function solution2(arr){
    let answer = arr;

    arr.sort((a, b) => {
        if(a[0]===b[0]) return a[1]-b[1]
        else return a[0]-b[0]
    })

    return answer;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution2(arr));