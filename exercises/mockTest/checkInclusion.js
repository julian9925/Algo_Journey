function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    
    for(let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for(let i = s1.length; i < s2.length; i++) {
        if(arraysAreEqual(s1Count, s2Count)) return true;
        
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
    }

    return arraysAreEqual(s1Count, s2Count);
}

function arraysAreEqual(a1, a2) {
    for(let i = 0; i < a1.length; i++) {
        if(a1[i] !== a2[i]) return false;
    }
    return true;
}
