var QuickUnionRank = /** @class */ (function () {
    function QuickUnionRank(size) {
        this.root = [];
        this.rank = [];
        this.root = new Array(size).fill(0).map(function (_, index) { return index; });
        this.rank = new Array(size).fill(1);
    }
    QuickUnionRank.prototype.getRoot = function () {
        return this.root;
    };
    QuickUnionRank.prototype.union = function (x, y) {
        var rootX = this.find(x);
        var rootY = this.find(y);
        // Quick Find O(n) -> Worst case O(n^2)
        // for (let index = 0; index < this.root.length; index++) {
        //     if (this.root[index] === rootY) {
        //         this.root[index] = rootX;
        //     }
        // }
        if (rootX != rootY) {
            this.root[rootX] = rootY;
        }
        // Quichk Rank Union O(n)
        // if (rootX != rootY) {
        //     if (this.rank[rootX] > this.rank[rootY]) {
        //         this.root[rootY] = rootX;
        //     } else if (this.rank[rootX] > this.rank[rootY]) {
        //         this.root[rootX] = rootY;
        //     } else {
        //         this.root[rootY] = rootX;
        //         this.rank[rootX] ++;
        //     }
        // }
    };
    QuickUnionRank.prototype.connected = function (x, y) {
        return this.find(x) === this.find(y);
    };
    QuickUnionRank.prototype.find = function (x) {
        while (x !== this.root[x])
            x = this.root[x];
        return x;
    };
    return QuickUnionRank;
}());
var edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
var ur = new QuickUnionRank(5);
for (var i = 0; i < edges.length; i++) {
    ur.union(edges[i][0], edges[i][1]);
}
// ur.union(1, 2);
// ur.union(2, 5);
// ur.union(5, 6);
// ur.union(6, 7);
// ur.union(3, 8);
// ur.union(8, 9);
console.log(ur.getRoot());
console.log(ur.connected(0, 4));
// console.log(ur.connected(1, 5));
// console.log(ur.connected(5, 7));
// console.log(ur.connected(4, 9));
// ur.union(9, 4);
// console.log(ur.connected(4, 9));
