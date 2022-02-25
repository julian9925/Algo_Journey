var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var lesson797 = /** @class */ (function () {
    function lesson797() {
        this.graph = [];
        this.result = [];
    }
    lesson797.prototype.sourceToTarget = function (graph) {
        this.graph = graph.slice();
        this.dfs(0, []);
        return this.result;
    };
    lesson797.prototype.dfs = function (index, stack) {
        var _this = this;
        if (stack.indexOf(index) > -1)
            return;
        stack.push(index);
        if (index === this.graph.length - 1) {
            this.result.push(stack);
        }
        else {
            this.graph[index].forEach(function (node) {
                _this.dfs(node, __spreadArray([], stack, true));
            });
        }
    };
    return lesson797;
}());
var rst = new lesson797();
console.log(rst.sourceToTarget([[1, 2], [3], [3], []]));
