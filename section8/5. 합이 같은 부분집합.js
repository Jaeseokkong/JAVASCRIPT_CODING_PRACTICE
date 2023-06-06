function solution(arr){
    let answer = "NO";
    let ch = Array.from({length:arr.length}, ()=>0)

    function DFS(v){
        if(v===arr.length){
            let left=right=0;
            for(let i=0;i<arr.length;i++){
                if(ch[i]===0) left += arr[i]
                else right += arr[i]
            }

            if(left===right){
                answer="YES";
                return answer;
            }else{
                return;
            }
        }else{
            ch[v]=1
            DFS(v+1)
            ch[v]=0
            DFS(v+1)
        }
    }

    DFS(0)

    return answer;
}


function solution2(arr){
    let answer="NO", flag=0;
    let total=arr.reduce((a,b)=>a+b, 0)
    let n=arr.length;

    function DFS(L, sum){
        //발견한 경우 모두 종료
        if(flag) return;
        if(L===n){
            if((total-sum)===sum){
                answer="YES"
                flag=1;
            }
        }else{
            //더한 경우
            DFS(L+1, sum+arr[L])
            //더하지 않은 경우
            DFS(L+1, sum)
        }
        
    }

    DFS(0, 0)

    return answer;
}
let arr=[1, 3, 5, 6, 7, 10];
console.log(solution2(arr));