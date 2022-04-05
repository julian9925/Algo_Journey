class Lesson200 {
	dfs() {

	}


	numberOfIslands(M: number[][]): number {
		const numberOfRows = M.length;
		const numberOfColumns = M[0].length;

		const visited: boolean[][] = new Array(numberOfRows);
		const stack: number[][] = new Array(numberOfRows);

		for (let row = 0; row < numberOfRows; row++) {
			for (let col = 0; col < numberOfColumns; col++) {
				visited[row][col] = false;
			}
		}

		let count = 0;

		for (let row = 0; row < numberOfRows; row++) {
			for (let col = 0; col < numberOfColumns; col++) {
				if (M[row][col] === 1 && !visited[row][col]) {
					count++;
				}
			}
		}

		return count;
	}
}

// Driver method
let M = [[ 1, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 1],
[1, 0, 0, 1, 1] ,[0, 0, 0, 0, 0], [1, 0, 1, 0, 1]];