function solution(str){
    let answer;
    let length = 0;
    let index = 0;

    str.forEach((element , i) => {
        if(length < element.length) {
            index = i
            length = element.length;
        };
    });

    answer = str[index];
    return answer;
}


let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));