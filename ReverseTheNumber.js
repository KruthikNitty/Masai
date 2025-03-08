let namenum=971
let rev=0;
while(namenum>0){
    let digit=namenum%10;
    rev=rev*10+digit;
    num=Math.floor(namenum/10);
}
console.log(rev);