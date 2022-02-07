function isValid(s) {
    let store = [];
    const compare = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    if (s.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            store.push(s[i]);
        } else {
            if (s[i] !== compare[store.pop()]) {
                return false
            }
        }
    }

    return true;
};

console.log(isValid('({[]})'));