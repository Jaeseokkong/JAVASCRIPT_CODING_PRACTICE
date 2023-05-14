function solution(arr){
    let answer = 0;

    for(let i = 0; i < arr[0].length; i++){
        let current = arr[0][i];
        let newList = arr[0];

        for(let j = 0; j < arr.length; j ++){
            let updateList = [];
            let currentList = arr[j].slice(arr[j].indexOf(current) + 1)
            for(let x of currentList){
                for(let y of newList){
                    if(x == y){
                        updateList.push(x)
                    }
                }
            }
            newList = updateList;
        }

        answer += newList.length;
    
        

    }

    return answer;
}



function solution2(test){
    let answer = 0, temp=[]; //가능 횟수
    m=test.length; //행의 갯수
    n=test[0].length; //학생수

    for(let i = 1; i <= n; i++){
        for(let j = 1; j<=n; j++){
            let cnt = 0;
            for(let k = 0; k < m; k++){
                let pi=pj=0;
                for(let s=0; s< n; s++){ 
                   if(test[k][s] === i) pi = s //멘토 등수
                   if(test[k][s] === j) pj = s //맨티 등수    
                }
                if(pi < pj) cnt++;
            }
            if(cnt === m){
                temp.push([i, j])
                answer++
            };
        }
    }
    console.log(temp)
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution2(arr));