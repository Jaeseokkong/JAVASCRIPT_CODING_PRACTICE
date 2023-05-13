//문제의도
//반복문을 통해서 일의 자리 숫자를 day과 같으면 + 1

function solution(day, arr){
    let answer = 0;

    arr.forEach(element => {
        const last = element.toString().substring(1);
        if(last == day){
            answer += 1;
        }
    });

    return answer;
}


arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));