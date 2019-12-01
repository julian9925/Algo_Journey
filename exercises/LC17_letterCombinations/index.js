var letterCombinations = function (digits) {
    const hashMap = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    let target = [];
    var i;
    for (i in digits) {
        target.push(hashMap[digits[i]]);
    }

    return combinationRecur(target);
};

function combinationRecur(arr) {
    let newArr = Object.assign([], arr);
    let top;
    let res;
    let ret;
    if (newArr.length === 0) {
        return [];
    } else {
        res = [];
        top = newArr.shift();
        ret = combinationRecur(newArr);
        if (ret.length === 0) {
            res = top;
        } else {
            for (let i = 0; i < top.length; i++) {
                for (let j = 0; j < ret.length; j++) {
                    res.push(top[i] + ret[j]);
                }
            }
        }
        return res;
    }
}

module.exports = letterCombinations;


