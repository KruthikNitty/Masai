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
    if(n===1){
  console.log("This Number is a happy number")
}
else{
    console.log("This Number is not a happy number")
}
}
isHappNumber(19);
isHappNumber(2);