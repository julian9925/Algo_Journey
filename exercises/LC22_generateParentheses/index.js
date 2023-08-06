// Recurrsicve approach
function generateParenthesis(n) {
    var res = [];
    var queue = [];
    queue.push({ str: "", left: n, right: n });
    while (!!queue.length) {
        var current = queue.shift();
        if (current.left > current.right) {
            continue;
        }
        if (current.left === 0 && current.right === 0) {
            res.push(current.str);
        }
        else {
            if (current.left > 0) {
                queue.push({ str: current.str + '(', left: current.left - 1, right: current.right });
            }
            if (current.right > 0) {
                queue.push({ str: current.str + ')', left: current.left, right: current.right - 1 });
            }
        }
    }
    return res;
}
console.log(generateParenthesis(3));
