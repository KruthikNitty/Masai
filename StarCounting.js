function printPattern(N) {
    let count = 1; 
    for (let i = 1; i <= N; i++) {
        let row = ""; 
        for (let j = 1; j <= N; j++) {
            row += count; 
            count++; 
        }
        console.log(row); 
    }
}


printPattern(3);