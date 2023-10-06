/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function throttle(fn, t) {
	let storedArg = null;
	let waiting = false;

	function timeoutFunc() {
		if (!storedArg) {
			waiting = false;
			return;
		}

		fn(...storedArg);
		storedArg = null;
		setTimeout(timeoutFunc, t);
	}

	return function(...args) {
		if (waiting) {
			storedArg = args;
			return;
		}

		fn(...args);
		waiting = true;
		setTimeout(timeoutFunc, t);
	}
}

module.exports = throttle;