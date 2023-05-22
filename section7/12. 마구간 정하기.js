//문제 이해못함;;
function solution(n, arr){
    let answer;
    arr.sort((a , b) => a - b)


    return answer;
}
 
//lt =1 , rt = 9; 최소 최대 간격 mid = 5;
//ep = 1 (직전에 들어간 마굿간)
//MID 보다 클경우 넣기 넣기( MID = > 2마리만 가능) RT => 4
function count(stable, dist){
    let cnt = 1, ep = stable[0];
    for(let i = 1; i < stable.length; i++){
        if(stable[i]-ep >= dist){
            cnt ++
            ep = stable[i]
        }
    }

    return cnt;

}


function solution2(c, stable){
    let answer;
    stable.sort((a, b) => a-b)
    let lt=1;
    let rt=stable[stable.length -1]

    while(lt<=rt){
        let mid = parseInt((lt+rt)/2)
        if(count(stable, mid) >= c){
            answer = mid;
            lt = mid + 1
        }else rt = mid - 1
    }

    return answer;
}


let arr=[1, 2, 8, 4, 9];
console.log(solution2(3, arr));
  