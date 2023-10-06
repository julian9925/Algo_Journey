function numDecodings(s) {
	return numDecodeWays(0);
  
	function numDecodeWays(index) {
	  let n = s.length;
	  if (index >= n) return 1;
	  if (s[index] === '0') return 0
  
	  let res = numDecodeWays(index + 1);
	  if (index < n-1 && (s[index] === '1' || (s[index] === '2' && parseInt(s[index+1]) < 7))) {
		  res += numDecodeWays(index + 2);
	  }

	  return res;
	}
};

console.log(numDecodings('12')); // 2 