//문제 의도
//7개를 더해서 100이 되게 끔 하자
//9개중 7개 2가지를 빼는 방법으로 
//index 0~8 중 2가지를 뺀 나머지의 합이 100인 리스트를 구하기

function solution(arr){
    let answer;
    let newArr = [];

    for(let i = 0; i < arr.length - 1; i++){
        let sum = 0;
        //첫번째 index 고르기
        for(let j = i + 1; j < arr.length; j ++){
            //두번째 index 고르기
            arr.forEach((value, index) => {
                if(index != i && index != j){
                    sum += value;
                    newArr.push(value);
                }
            });
            
            if(sum == 100){
                return newArr;
            }else{
                newArr = [];
                break;
            }
        }
    }

}
let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));