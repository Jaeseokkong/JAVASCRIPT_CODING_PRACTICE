function solution(arr){
    let answer = [];

    sortArr =[...arr];
    sortArr.sort((a, b) =>  b- a);

    for(let x of arr){
        answer.push(sortArr.indexOf(x) + 1)
    }


    return answer;
}



let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));