function solution(n){
    let answer=[];
    //체크배열
    let ch = Array.from({length:n+1},()=>0)
    
    function DFS(v){
        if(v===n+1){
            let tmp = "";
            for(let i=1; i<=n; i++){
                if(ch[i]===1) tmp+=i+" ";
            }
            if(tmp.length>0) answer.push(tmp.trim());
        }
        else{   
            //들어갈 경우
            ch[v]=1
            DFS(v+1)
            //들어가지 않을 경우
            ch[v]=0
            DFS(v+1)
        }
    }

    DFS(1);

    return answer;
}
console.log(solution(3));
