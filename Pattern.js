function patternPrinting(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        for (let j = 0; j < N; j++) {
            if (i === 0 || i === N - 1 || j === 0) row += "* ";
            else row += "  ";
        }
        console.log(row.trim());
    }
}

patternPrinting(5);