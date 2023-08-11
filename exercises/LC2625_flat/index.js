var flat = function (arr, n) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && n > 0) {
            res = res.concat(flat(arr[i], n - 1));
        }
        else {
            res.push(arr[i]);
        }
    }
    return res;
};
// function inner(arr: MultiDimensionalArray): MultiDimensionalArray {
// 	let res: MultiDimensionalArray = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (Array.isArray(arr[i])) {
// 			res = res.concat(inner(arr[i] as MultiDimensionalArray));
// 		} else {
// 			res.push(arr[i]);
// 		}
// 	}
// 	return res;
// }
console.log(flat([1, 2, [3, 4, [5, 6]]], 1));
