//문제 의도
// 반복문을 통해서 순차적으로 비교해서 최소값을 구하자;
function solution(arr){
    let answer, min=Number.MAX_SAFE_INTEGER; //안정적인 큰 인티저 값이 들어간다;
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]) min = arr[i];
    }
    answer=min;
    return answer;
}
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));