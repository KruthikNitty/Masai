function zigZagTraversal(matrix, N, M) {
    let result = [];
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
            for (let j = M - 1; j >= 0; j--) {
                result.push(matrix[i][j]);
            }
        } else {
            for (let j = 0; j < M; j++) {
                result.push(matrix[i][j]);
            }
        }
    }
    console.log(result.join(" "));
}

let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
];

zigZagTraversal(matrix, 4, 5);