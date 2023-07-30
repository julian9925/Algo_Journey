/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    var size = matrix.length;
    // for row
    for (var i = 0; i < size; i++) {
        // for column
        for (var j = 0; j < i; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[size - 1 - j][i];
            matrix[size - 1 - j][i] = temp;
        }
    }
}
;
var test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(test);
