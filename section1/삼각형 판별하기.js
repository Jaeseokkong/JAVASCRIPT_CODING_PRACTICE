//문제의 의도
//가장큰 길이가 다른 두값의 합보다 크면 삼각형을 만들 수 있다.
function solution(a, b, c){
    let big = a;
    let small = 0;
    if(a < b){ 
        big = b 
        if(b < c){
            big = c;
            small = a + b;
        }else{
            small = a + c;
        }
    }else if(a < c){
         big = c;
         small = a + c;
    }

    return big < small ? "YES" : "NO";   

}

console.log(solution(13, 33, 17));