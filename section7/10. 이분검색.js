function solution(n, arr){
    let answer;

    arr.sort((a , b) => a - b);

    for(let i = 0; i < arr.length / 2; i ++){
        if(arr[i]===n){
            answer = i + 1;
        }else if(arr[i + Math.round(arr.length / 2)]===n){
            answer = i + Math.round(arr.length / 2) + 1
        }

    }


    return answer;
}

//이분 검색은 O(logN) 검색 
//lt 0 rt 7 중간값 57 비교해서 작으면 왼쪽으로  rt => 중간
//한번 비교할때마다 절반을 없앰(정렬된 조건에서)

function solution2(target, arr){
    let answer;
    arr.sort((a, b) => a - b);
    let lt=0, rt=arr.length - 1;
    console.log(arr)
    
    while(lt<=rt){
        console.log(lt, rt)
        let mid = parseInt((lt + rt)/2);
        if(arr[mid]===target){
            answer = mid + 1;
            break;
        }else if(arr[mid]>target)rt=mid-1
        else lt=mid+1
    }

    return answer;
}


let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution2(32, arr));

[ 12, 23, 32, 57, 65, 81, 87, 99]
