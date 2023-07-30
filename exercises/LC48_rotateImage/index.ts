/**
 Do not return anything, modify matrix in-place instead.
 */
 function rotate(matrix: number[][]): void {
	let size = matrix.length;
	// for row
	for (let i = 0; i < size; i++) {
		// for column
		for (let j = 0; j < i; j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	for (let i = 0; i < size; i++) {
		matrix[i] = matrix[i].reverse();
	}
 };


 const test = [[1,2,3],[4,5,6],[7,8,9]];
 rotate(test);