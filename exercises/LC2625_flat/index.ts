type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
	let res: MultiDimensionalArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i]) && n > 0) {
			res.push(...flat(arr[i] as MultiDimensionalArray, n - 1));
		} else {
			res.push(arr[i]);
		}
	}

	return res;
};

console.log(flat([1, 2, [3, 4, [5, 6]]], 1));