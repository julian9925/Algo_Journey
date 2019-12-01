const climbStairs = n => {
	if (n <= 3) {
		return n;
	}

	let first = 1, second = 2;
	let third;

	for (let i = 3; i <= n; i ++) {
		third = first + second;
		first = second;
		second = third;
	}

	return third;
};

module.exports = climbStairs;
