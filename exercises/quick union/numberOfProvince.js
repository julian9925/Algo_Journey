var NumOfProvince = /** @class */ (function () {
    function NumOfProvince(size) {
        this.parents = [];
        this.parents = new Array(size).fill(-1);
    }
    NumOfProvince.prototype.union = function (x, y) {
        var rootX = this.find(x);
        var rootY = this.find(y);
        if (rootX !== rootY) {
            this.parents[rootX] = rootY;
        }
    };
    NumOfProvince.prototype.find = function (x) {
        if (this.parents[x] === -1) {
            return x;
        }
        return this.find(this.parents[x]);
    };
    NumOfProvince.prototype.findCirumNUmber = function (M) {
        for (var i = 0; i < M.length; i++) {
            for (var j = 0; j < M.length; j++) {
                if (M[i][j] === 1 && i != j) {
                    this.union(i, j);
                }
            }
        }
        var count = 0;
        for (var i = 0; i < this.parents.length; i++) {
            if (this.parents[i] === -1) {
                count++;
            }
        }
        return count;
    };
    return NumOfProvince;
}());
var matrix = [
    [1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1]
];
var test = new NumOfProvince(matrix.length);
console.log(test.findCirumNUmber(matrix));
