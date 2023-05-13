function solution(arr){
    let answer = 0;
    comp = 0;
    arr.forEach(element => {
       if(comp < element){
         answer ++;
         comp = element
       } 
    });
    return answer;
}
let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));