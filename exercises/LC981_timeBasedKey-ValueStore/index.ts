class TimeMap {
	valueStore: {
		[key: string]: [
			[key: number, value: string]
		]
	}

	constructor() {
		this.valueStore = {};
	}

	private binaryS(key: string, timestamp: number): string {
		if (!this.valueStore[key] || this.valueStore[key][0][0] > timestamp) return "";
		let arr = this.valueStore[key];
		let l = 0, r = arr.length - 1;

		while (l <= r) {
			let m = Math.floor((r + l) / 2);
			if (l == r) {
				return arr[l][1];
			}
			if (r - l + 1 == 2) {
				return arr[r][0] > timestamp ? arr[l][1] : arr[r][1];
			}
			if (arr[m][0] == timestamp) return arr[m][1]

			if (arr[m][0] > timestamp) {
				r = m - 1;
			}
			else {
				l = m + 1;
			}
		}

		return "";
	}

	set(key: string, value: string, timestamp: number): void {
		if (!this.valueStore[key]) {
			this.valueStore[key] = [[timestamp, value]];
		}
		else {
			this.valueStore[key].push([timestamp, value]);
		}
	}

	get(key: string, timestamp: number): string {
		return this.binaryS(key, timestamp);
	}
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */