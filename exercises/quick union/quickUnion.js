var QuickUnion = /** @class */ (function () {
    function QuickUnion(size) {
        this.root = [];
        this.root = new Array(size).fill(0).map(function (_, index) { return index; });
    }
    QuickUnion.prototype.union = function (x, y) {
        var rootX = this.root[x];
        var rootY = this.root[y];
        // Quichk Find O(n) -> Worst case O(n^2)
        // for (let index = 0; index < this.root.length; index++) {
        //     if (this.root[index] === rootY) {
        //         this.root[index] = rootX;
        //     }
        // }
        // Quichk Union O(n)
        if (rootX != rootY) {
            this.root[rootY] = rootX;
        }
    };
    QuickUnion.prototype.connected = function (x, y) {
        return this.find(x) === this.find(y);
    };
    QuickUnion.prototype.find = function (x) {
        while (x !== this.root[x])
            x = this.root[x];
        return x;
    };
    return QuickUnion;
}());
var uf = new QuickUnion(10);
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.connected(1, 5));
console.log(uf.connected(5, 7));
console.log(uf.connected(4, 9));
uf.union(9, 4);
console.log(uf.connected(4, 9));
