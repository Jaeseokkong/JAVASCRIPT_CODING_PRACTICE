function solution(money, arr){
    let answer = 0;
    

    //배송비와 상품 가격의 합으로 정렬
    arr = arr.sort((a , b) => (a[0] + a[1]) - (b[0] + b[1]))

    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        let discountList = arr.map(v => [...v])
        discountList[i][0] /= 2;

        console.log(discountList)

    }
    
   
    return answer;
}


function solution2(m, product){
    let answer = 0;
    n=product.length;
    product.sort((a,b) => (a[0] + a[1]) - (b[0] + b[1]))
   
    for(let i = 0; i < n; i++){
        //할인 받은 상품을 구매하고 남은 예산
        let money = m - (product[i][0] / 2 + product[i][1]);
        let cnt = 1;
        for(let j = 0; j < n; j++){
            if(j!==i && money < product[j][0] + product[j][1]) break;
            if(j!==i && (product[j][0] + product[j][1]) <= money){
                money -= (product[j][0] + product[j][1]);
                cnt ++;
            }
        }

        answer = Math.max(answer, cnt)
    }

    return answer;
}





let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution2(28, arr));