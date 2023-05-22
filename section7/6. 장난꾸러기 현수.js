function solution(arr){
    let answer;
    let hs = 0;
    let zz = 0;
    let zzValue = 0;

    for(let i = arr.length -1 ; i >= 0; i--){
        if(zzValue != 0){
            if(arr[i] >= zzValue && arr[i - 1] <= zzValue) {
                hs = i
                break;
            }
        }else{
            if(arr[i] < arr[i - 1]){
                zzValue = arr[i]
                console.log(zzValue)
                zz = i
            }
        }

    }

    answer = [hs + 1, zz + 1]

    return answer;
}

//정렬
function solution2(arr){
    let answer = [];
    let sortArr = arr.slice();
    sortArr = sortArr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== sortArr[i]) answer.push(i + 1)
    }



    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
//let arr=[120,130,150,150,130,150]
console.log(solution2(arr)); 
