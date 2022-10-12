function climbStairs(n) {
    if (n < 3) {
        return n;
    }
    var first = 1, second = 2;
    var third = 0;
    for (var i = 3; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}
;
module.exports = climbStairs;
