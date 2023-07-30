/**
 Do not return anything, modify arr in-place instead.
 */
 function duplicateZeros(arr: number[]): void {
	let n = arr.length;
	const res: number[] = [];
	for (let i = 0; i < n && res.length < n; i++) {
		res.push(arr[i]);
		if (arr[i] == 0 && res.length < n) {
			res.push(0);
		}
	}
	arr = Object.assign(arr, res);
 };