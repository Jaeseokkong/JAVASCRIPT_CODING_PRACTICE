
function solution(arr){
    let answer = [];
    let comp = 0;

    arr.forEach(element => {
        if(comp < element) answer.push(element)
        comp = element;
    });

    return answer;
}
let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));