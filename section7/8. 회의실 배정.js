function solution(meeting){
    let answer = 1;
    meeting = meeting.sort((a, b) => {
        if(a[0]===b[0]) return a[1]=b[1]
        else return a[0]-b[0]
    })

    for(let i = 0; i < arr.length ; i++){
        let standard = arr[i][1];
        let can = 1;
        for(let j = i + 1; j < arr.length; j++){
            if(standard <= arr[j][0]){
                can ++
                standard = arr[j][1]
            }
        }
        answer = Math.max(answer, can);
    }

    return answer;
}


//끝나는 시간이 짧은 것으로 정렬
//끝나는 시간이 같은 경우 시작시간으로 정렬
function solution2(meeting){
    let answer = 0;

    meeting.sort((a, b) =>{
        if(a[1]===b[1]) return a[0]-b[0]
        else return a[1]-b[1]
    })
    let et = 0;

    for(let x of meeting){
        if(x[0]>=et){
            answer ++
            et=x[1]
        }
    }

    return answer;
}

//let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let arr=[[3, 3], [1, 3], [2, 3]];
console.log(solution2(arr));