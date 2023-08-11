"use strict";
exports.__esModule = true;
Array.prototype.snail = function (rowsCount, colsCount) {
    var res = Array.from({ length: rowsCount }, function () { return []; });
    for (var col = 0; col < colsCount - 1; col++) {
        if (col % 2 === 1) {
            for (var row = rowsCount - 1; row >= 0; row--) {
                var value = this.shift();
                if (value === -1)
                    break;
                res[row][col] = value;
            }
        }
        else {
            for (var row = 0; row < rowsCount; row++) {
                var value = this.shift();
                if (value === -1)
                    break;
                res[row][col] = value;
            }
        }
    }
    return res;
};
var arr = [1, 2, 3, 4];
console.log(arr.snail(1, 4)); // [[1,2,3,4]]
