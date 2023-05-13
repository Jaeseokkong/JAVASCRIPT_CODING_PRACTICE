function solution(a, b){         
    let answer=[];

    //가위 1 바위 2 보 3
    for(let i = 0; i < a.length; i++){
        let result = "D";

        if(a[i] === b[i]) ;
        else if(a[i] === 3) {result = b[i] == 1 ? "B" : "A"}
        else{result = a[i] + 1 === b[i] ? "B" : "A"}
       
        answer.push(result);
    }


    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));


