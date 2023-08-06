function groupAnagrams(strs) {
    var stringSortedMaps = {};
    strs.forEach(function (item) {
        var sortedItem = item.split('').sort().join('');
        if (sortedItem in stringSortedMaps) {
            stringSortedMaps[sortedItem].push(item);
        }
        else {
            stringSortedMaps[sortedItem] = [item];
        }
    });
    var res = Object.values(stringSortedMaps);
    return res;
}
module.exports = groupAnagrams;
