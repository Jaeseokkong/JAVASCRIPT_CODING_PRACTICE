function solution(arr){
    let answer = 0;

    arr.sort((a , b) => {
        return (a[0]+a[1]) - (b[0]+b[1])
    })


    for(let i = 0; i < arr.length - 1; i ++){
        let st = arr[i][0]
        let et = arr[i][1]
        can = 1;
        for(let j = i + 1; j < arr.length; j ++){
            if(st <= arr[j][0] && et > arr[j][0]){
                st = arr[j][0]
                et = Math.min(et, arr[j][1])
                can ++
            }
        }

        answer = Math.max(answer, can)
    }

    return answer;
}

//동시에 존재 (겹치는 부분)
//하나의 사람을 두개로 분리해야함 [[14, s] [18 , e]]
//s 를 받으면 증가 e를 받으면 감소
//누가 가고 오는걸 생각할 필요없이 들어오고 나가는 횟수만 체크

function solution2(times){
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];

    for(let x of times){
        T_line.push([x[0], "s"])
        T_line.push([x[1], "e"])
    }

    T_line.sort((a , b) => {
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt()
        else return a[0]-b[0]
    })

    let cnt = 0;
    for(let x of T_line){
        if(x[1]==='s') cnt ++
        else cnt--

        answer = Math.max(answer, cnt)
    }
    


    return answer;
}



let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14], [3, 4]];
console.log(solution2(arr));


