function solution(arr1, arr2){
    let answer=[];
    let tmp = new Set();
    let p1=p2=0;
    let n = arr1.length;
    let m = arr2.length;
    arr1 = arr1.sort((a, b) => a - b)
    arr2 = arr2.sort((a, b) => a - b)


    while(p1<n && p2<m){
        if(arr1[p1] < arr2[p2]){
            for(let x of arr2){
                if(x === arr1[p1]){
                    tmp.add(arr1[p1])
                }
            }
            p1++
        }else{
            for(let x of arr1){
                if(x === arr2[p2]){
                    tmp.add(arr2[p2])
                }
               
            }
            p2++
        }
    }
    answer = Array.from(tmp)

    return answer;
}

function solution2(arr1, arr2){
    let answer=[];
    arr1.sort((a , b) => a - b);
    arr2.sort((a , b) => a - b);
    let p1=p2=0;
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1] == arr2[p2]){
            answer.push(arr1[p1++])
            p2++
        }else if(arr1[p1] < arr2[p2]) p1++
        else p2++
    }

    return answer;
}




let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution2(a, b));