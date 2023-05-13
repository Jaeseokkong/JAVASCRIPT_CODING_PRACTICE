function solution(str){
    let answer;
    str = str.toLowerCase();

    list = str.split("");
    reverseList = [...list].reverse();
    answer = list.join("") === reverseList.join("") ?"YES" : "NO"

    return answer;
}


function solution2(str){
    let answer = "YES";
    str = str.toLowerCase();

    for(let i = 0; i < Math.floor(str.length / 2); i ++){
       if(str[i] !== str[str.length - 1 - i]) return "NO"
    }


    return answer;
}

let str="goooG";
console.log(solution2(str));