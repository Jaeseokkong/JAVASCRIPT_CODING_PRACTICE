function solution(a, b){
    let answer = 0, lt = 0;
    let n = b.length;
    let aH = new Map();
    let bH = new Map();
    let list = []

    for(let x of b){
        if(bH.has(x)) bH.set(x , bH.get(x) + 1)
        else bH.set(x , 1)
    }


    for(let rt = 0; rt < a.length; rt ++){

        if(aH.has(a[rt])) aH.set(a[rt], aH.get(a[rt]) + 1)
        else aH.set(a[rt], 1) 
        
        //n 만큼 채워졌으면 비교 
        if(rt >= n - 1){
          let result = true;

          //aH 와 bH 비교
          bH.forEach((value, key) => {
            //어긋날경우 반복문 종료
            if(!aH.has(key) || aH.get(key) != value){
                result = false;
                return;
            }
          })
       
          if(result == true) {answer ++}

          //lt 빼주기
          //2이상인 경우 빼주기
          if(aH.get(a[lt])>1) aH.set(a[lt], aH.get(a[lt++]) - 1)
          //1인 경우 빼주기 없애기
          else aH.delete(a[lt++])
          
            
        }
        
    }

    return answer;
}


function compareMaps(map1, map2){
    if(map1.size !== map2.size) return false;
    for(let [key, value] of map1){
        if(!map2.has(key) || map2.get(key) !== value) return false;
    }
    return true;
}

function solution2(s, t){
    let answer = 0;
    let tH = new Map();
    let sH = new Map();

    //tH Map세팅
    for(let x of t){
        if(tH.has(x)) tH.set(x, tH.get(x) + 1);
        else tH.set(x, 1);
    }

    let len = t.length - 1;

    //sH 초기 세팅
    for(let i = 0; i < len; i ++){
        if(sH.has(s[i])) sH.set(x, sH.get(s[i]) + 1);
        else sH.set(s[i], 1);
    }

    let lt = 0;
    for(let rt = len; rt < s.length; rt++){
        if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
        else sH.set(s[rt], 1);

        if(compareMaps(sH, tH)) answer ++

        sH.set(s[lt], sH.get(s[lt]) - 1);
        if(sH.get(s[lt]) === 0) sH.delete(s[lt])

        lt++;

    }

 

    return answer;
}


let a="bacaAacba";
let b="abc";
console.log(solution2(a, b));