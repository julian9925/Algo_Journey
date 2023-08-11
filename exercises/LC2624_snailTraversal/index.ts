import {} from 'module';

declare global {
	interface Array<T> {
	  snail(rowsCount: number, colsCount: number): number[][];
	}
}
  
Array.prototype.snail = function(rowsCount: number, colsCount: number): number[][] {
	let res: number[][] = Array.from({length: rowsCount}, () => []);
	
	for (let col = 0; col < colsCount; col++) {
		if (col % 2 === 1) {
			for (let row = rowsCount - 1; row >= 0; row--) {
				const value = this.shift();
				if (value === -1) break;

				res[row][col] = value;
			}
		} else {
			for (let row = 0; row < rowsCount; row++) {
				const value = this.shift();
				if (value === -1) break;

				res[row][col] = value;
			}
		}
	}

	return res;
}


const arr = [1,2,3,4];
console.log(arr.snail(1,4)); // [[1,2,3,4]]
