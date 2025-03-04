function getsumofsquares(n){
    let sum=0;
    while(n>0){
        let digit=n%10;
        sum+=digit*digit;
        n=Math.floor(n/10)
    }
    return sum;
}
function isHappNumber(n){
    let count=10;
    while(n!==1 && count>0){
        n=getsumofsquares(n)
        count--;
    }
    return n===1;
  
}
console.log(isHappNumber(19))
console.log(isHappNumber(7))