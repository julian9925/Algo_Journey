var Graph = /** @class */ (function () {
    function Graph() {
    }
    Graph.prototype.validGraph = function (size, edges, start, end) {
        var adjacenyList = new Array(size);
        for (var index = 0; index < adjacenyList.length; index++) {
            adjacenyList[index] = [];
        }
        var stack = [start];
        var seen = [];
        for (var index = 0; index < edges.length; index++) {
            adjacenyList[edges[index][0]].push(edges[index][1]);
        }
        console.log(adjacenyList);
        while (stack.length !== 0) {
            var node = stack.pop();
            if (node === end) {
                return true;
            }
            if (seen.indexOf(node) !== -1) {
                continue;
            }
            seen.push(node);
            for (var _i = 0, _a = adjacenyList[node]; _i < _a.length; _i++) {
                var neighbor = _a[_i];
                stack.push(neighbor);
            }
        }
        console.log(seen);
        return false;
    };
    return Graph;
}());
var gh = new Graph();
console.log(gh.validGraph(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));
