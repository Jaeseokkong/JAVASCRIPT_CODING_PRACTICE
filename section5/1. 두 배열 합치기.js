function solution(arr1, arr2){    
    let answer = [];
    let n = arr1.length + arr2.length

    while(answer.length < n){
        if(arr1.length == 0){
            answer.push(...arr2)
            break;
        }else if(arr2.length == 0){
            answer.push(...arr1)
            break;
        }else if(arr1[0] > arr2[0]){
            answer.push(arr2[0])
            arr2 = arr2.slice(1)
        }else{
            answer.push(arr1[0])
            arr1 = arr1.slice(1)
        }
    }
    return answer;
}

//two pointer
function solution2(arr1, arr2){    
    let answer =[];
    let n = arr1.length;
    let m = arr2.length;
    let p1=p2=0;
    while(p1<n && p2<m){
        if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]); //p1을 넣고 +1
        else answer.push(arr2[p2++])
    }

    while(p1<n) answer.push(arr1[p1++])
    while(p2<m) answer.push(arr2[p2++])
    return answer;
}



let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution2(a, b));