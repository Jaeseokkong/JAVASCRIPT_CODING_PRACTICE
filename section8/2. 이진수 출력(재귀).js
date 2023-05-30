function solution(n){
    let answer = 0;
    DFS(n);

    function DFS(n){
        if(n == 0) return;
        else{
            DFS(n-1)
            answer += 1
            let current = answer;
            let now = current % 10;
            let string = "";

            while(current > 0){
                if(now == 2){
                    string = "0" + string; 
                    current = Math.floor(current/10) + 1;
                }else{
                    string = now.toString() + string;
                    current = Math.floor(current/10);
                }
                now = current % 10;
            }
            answer = Number(string);

        }
    }

    return answer;
}

//설명 듣고
function solution2(n){
    let answer = "";

    
    function DFS(n){
        if(n == 0){
            return;
        }else{
            let 나머지 = n % 2;
            n = parseInt(n/2);     
            DFS(n)
            answer += 나머지
        }
    }
    DFS(n);

    return answer;
}

function solution3(n){
    let answer ="";
    function DFS(n){
        if(n===0) return;
        else{
            DFS(parseInt(n/2))
            answer += (n%2);
        }
    }
    DFS(n)
    return answer;
}


console.log(solution3(11));
