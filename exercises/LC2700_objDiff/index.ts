function objDiff(obj1: any, obj2: any): any {
	// check if both are primitive types then return the union of difference,
	if (!isObject(obj1) && !isObject(obj2))
		return obj1 === obj2 ? {}: [obj1, obj2]

	// check if both are not objects then return the union of difference
    if (!isObject(obj1) || !isObject(obj2)) {
        return [obj1, obj2]
    } 

	// check if both are arrays then return the union of difference
    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return [obj1, obj2]
    }

    const diff = {}

    for (const key in obj1) {
        if (key in obj2) {
			// if both are objects then recursively call objDiff
            const res = objDiff(obj1[key], obj2[key])
			// if the result is not null then add it to the diff object
            if (Object.keys(res).length) {
                diff[key] = res
            }
        }
    }

	return diff;
};

function isObject(obj: any): boolean {
	return typeof obj === 'object' && obj !== null;
}

const obj1 = {
	a: 1,
	b: {
		c: 2,
		d: [3, 4],
		e: {
			f: [
				{
					g: 5,
				}
			]
		}
	}
}