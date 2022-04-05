var LC1059 = /** @class */ (function () {
    function LC1059() {
    }
    LC1059.prototype.leadsToDestination = function (n, edges, source, destination) {
        var adjacenyList = new Array(n);
        for (var index = 0; index < adjacenyList.length; index++) {
            adjacenyList[index] = [];
        }
        var stack = [source];
        var seen = [];
        for (var index = 0; index < edges.length; index++) {
            adjacenyList[edges[index][0]].push(edges[index][1]);
            // adjacenyList[edges[index][1]].push(edges[index][0]);
        }
        while (stack.length !== 0) {
            var node = stack.pop();
            if (node === destination) {
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
        return false;
    };
    ;
    return LC1059;
}());
var lc1059 = new LC1059();
console.log(lc1059.leadsToDestination(3, [[0, 1], [0, 2]], 0, 2));
