//전위 1 2 4 5 3 6 7
//순서 부모 왼 오
//부모(루트)
//왼쪽 오른쪽 규칙 왼쪽은 부모 x 2 / 오른쪽 부모 x 2 + 1
function solution(v){
    let answer;
    
    function DFS(v){
        if(v > 7)  return;
        else{
            console.log(v);
            //왼쪽 (먼저 돎)
            DFS(v*2)
            //오른쪽
            DFS(v*2 + 1)
        }
        
    }

    DFS(v);

    return answer;
}
//전위순회 부 왼 오
//중위순회 왼 부 오
//후위순위 왼 오 부

//중위순회
function solution2(v){
    let answer;
    
    function DFS(v){
        if(v > 7)  return;
        else{
            //왼쪽 (먼저 돎)
            DFS(v*2)
            console.log(v);
            //오른쪽
            DFS(v*2 + 1)
        }
        
    }

    DFS(v);

    return answer;
}

//후위순회
function solution3(v){
    let answer;
    
    function DFS(v){
        if(v > 7)  return;
        else{
            //왼쪽 (먼저 돎)
            DFS(v*2)
            //오른쪽
            DFS(v*2 + 1)
            console.log(v);
        }
        
    }

    DFS(v);

    return answer;
}



console.log(solution3(1));