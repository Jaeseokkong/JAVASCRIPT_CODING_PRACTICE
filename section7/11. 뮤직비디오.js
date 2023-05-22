//n등분을 나누어서 
//그중 합이 가장 큰 값이 가장 작게끔
//실패...
function solution(n, arr){
    let answer;

    let lt=rt=arr.length - 1

    let max = 0;
    while(true){
        for(let i = rt; i >= lt; i--){
            max += arr[i]
        }

        let cnt = n - 1
        let sum = 0;
        for(let i = lt - 1; i >= 0 ; i--){
            if(sum + arr[i] <= max) sum += arr[i];
            else {
                sum = arr[i];
                cnt -= 1
                if(cnt < 0){ 
                    max = 0;
                    lt --
                    break;
                }
            }
        }

        if(cnt == 1){
            break;
        }

    }
    
    answer = max
    
    return answer;
}

//최소한의 용량은 가장 큰 노래(lt) max ~ 모든값의 합(rt)
// lt + rt / 2 => mid (27) 이분검색 
// 27해서 값이 2 => 27은 가능하다 (더 작은 값으로 확인해야함) rt 26
// 17해서 값이 3 => 17은 가능하다 (더 작은 값으로 확인해야함) rt 16
// 12해서 값이 4 => 12는 불가능하다 (더 큰 값으로 확인해야함) lt 13
// 14해서 값이 ...

//필요한 장수를 리턴
function count(songs, capacity){
    let cnt=1, sum=0;
    for(let x of songs){
        if(sum+x>capacity){
            cnt ++
            sum=x;
        }else sum+=x;
    }
    return cnt;
}


function solution2(m, songs){
    let answer;
    let lt=Math.max(...songs)
    let rt=songs.reduce((a, b) => a + b, 0)

    while(lt<=rt){
        let mid=parseInt((lt+rt)/2)
        //답이 가능한 경우
        if(count(songs, mid) <= m){
            answer = mid;
            rt=mid-1;
        }
        //답이 불가능한 경우
        else lt=mid+1;

    }
    
    return answer;
}


// lt = 9, rt = 45
// lt<=rt true
// mid = 27 answer = 27
// 1 2 3 4 5 6 / 7 8 9/ => cnt : 2


// lt = 9, rt = 26
// lt<=rt true
// mid = 17 answer = 17
// 1 2 3 4 5 / 6 7 / 8 9 => cnt : 3


// lt = 9, rt = 16
// lt<=rt true
// mid = 12 
// 1 2 3 4 / 5 6 / 7 / 8 / 9 => cnt : 5


// lt = 13, rt = 16
// lt<=rt true
// mid =  14 
// 1 2 3 4 / 5 6 / 7 / 8 / 9 => cnt : 5

// lt = 15, rt = 16
// lt<=rt true
// mid = 15 
// 1 2 3 4 5 / 6 7 / 8 / 9 => cnt : 4

// lt = 16, rt = 16
// lt<=rt true
// mid = 16 
// 1 2 3 4 5 / 6 7 / 8 / 9 => cnt : 4

// lt = 17 , rt = 16
// lt<=rt false

// return 17








let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution2(3, arr));