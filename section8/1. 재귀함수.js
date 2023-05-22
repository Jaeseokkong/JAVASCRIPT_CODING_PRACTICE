//DFS(3) -> DFS(2) -> DFS(1) -> DFS(0) ...

function solution(n){
    function DFS(L){
        if(L==0) return;
        else{
            DFS(L-1);
            console.log(L)
        }
       
    }

    DFS(n)
}



console.log(solution(3));