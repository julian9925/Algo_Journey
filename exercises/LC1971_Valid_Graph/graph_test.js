var GraphTest = /** @class */ (function () {
    function GraphTest() {
    }
    GraphTest.prototype.validGraph = function (size, edges, start, end) {
        var adjacenyList = new Array(size);
        var stack = [start];
        var seen = [];
        for (var i = 0; i < size; i++) {
            adjacenyList[i] = [];
        }
        for (var i = 0; i < edges.length; i++) {
            adjacenyList[edges[i][0]].push(edges[i][0]);
            adjacenyList[edges[i][1]].push(edges[i][1]);
        }
        while (stack.length > 0) {
            var node = stack.pop();
            if (node === end)
                return true;
            if (stack.indexOf(node) !== 0)
                continue;
            seen.push(node);
            for (var _i = 0, _a = adjacenyList[node]; _i < _a.length; _i++) {
                var neighbor = _a[_i];
                stack.push(neighbor);
            }
        }
        return false;
    };
    return GraphTest;
}());
var ghTest = new GraphTest();
console.log(ghTest.validGraph(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));
