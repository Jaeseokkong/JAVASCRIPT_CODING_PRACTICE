function solution(board, moves){
    let answer = 0;
    const stack = [];

    for(let x of moves){
        let doll = 0;
        let deep = 0;

        while(doll == 0 && deep < board.length){
            doll = board[deep++][x - 1];
        }

        if(doll == 0){
            continue;
        }else board[deep - 1][x - 1] = 0;

        if(stack[stack.length -1] == doll){
            stack.pop()
            answer += 2
        }else stack.push(doll)

        
    }
    return answer;
}


function solution2(board, moves){
    let answer = 0;
    let stack = [];
    moves.forEach(pos => {
        for(let i = 0; i < board.length; i++){
            if(board[i][pos-1] !== 0){
                let tmp = board[i][pos-1];
                board[i][pos-1] = 0;
                if(tmp === stack[stack.length - 1]){
                    stack.pop();
                    answer += 2;
                }else stack.push(tmp);
                break;
            }  
        }
    }); 

  
    return answer;
}

let a=[
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];


let b=[1,5,3,5,1,2,1,4];
console.log(solution2(a, b));


