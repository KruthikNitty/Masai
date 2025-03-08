function isSumofsquares(k){
    for(let a=0;a*a<=k;a++){
        let b=Math.sqrt(k-a*a);
        if(b===Math.floor(b)){
            return true;
        }
    }
    return false;
}
console.log(isSumofsquares(25));
console.log(isSumofsquares(7));
