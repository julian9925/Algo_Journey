function searchMatrix(matrix: number[][], target: number): boolean {
	const m = matrix.length;
  	const n = matrix[0].length;

	if (target < matrix[0][0] || target > matrix[m-1][n-1]) {
		return false;
	}

	let up = 0;
	let down = m - 1;

	while(up <= down) {
        let mid = Math.floor((up + down) / 2);
        if (matrix[mid][n-1] === target) {
            return true;
        }
        else if (matrix[mid][n-1] < target) {
            const index = binarySearch(target, matrix[mid]);
            if (index === -1) {
                up = mid + 1;
            } else {
                return true;
            }
        }
        else {
            const index = binarySearch(target, matrix[mid]);
            if (index === -1) {
                down = mid - 1;
            } else {
                return true;
            }
        }
    }
    return false;
};

function binarySearch(target: number, numbers: number[]) {
	let left = 0;
	let right = numbers.length - 1;
	
	while(left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (numbers[mid] === target) {
			return mid;
		}

		else if (numbers[mid] < target) {
			left = mid + 1;
		}

		else {
			right = mid - 1;
		}
	}
	return -1;
}