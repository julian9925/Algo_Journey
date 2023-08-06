// function isIsomorphic(s: string, t: string): boolean {
//     if (s.length !== t.length) return false;

//     let mapS = new Map();
//     let mapT = new Map();

//     for (let i = 0; i < s.length; i ++) {
//         if (!mapS.has(s[i])) mapS.set(s[i], t[i]);
//         if (!mapT.has(t[i])) mapT.set(t[i], s[i]);

//         if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) return false;
//     }

//     return true;
// };

function wordPattern(pattern: string, s: string): boolean {
    let mapS = new Map();
    let mapPattern: Record<string, number> = {};
    let sSplit = s.split(' ');

    if (pattern.length !== sSplit.length) return false;

    for (let i = 0; i < sSplit.length; i++) {
        if (!mapS.has(sSplit[i]) && !(pattern[i] in mapPattern)) {
            mapS.set(sSplit[i], pattern[i]);
            mapPattern[pattern[i]] = i;
        }

        if (mapS.get(sSplit[i]) !== pattern[i]) return false;
    }

    return true;
};