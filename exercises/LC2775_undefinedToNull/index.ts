function undefinedToNull(obj: Record<any, any>): Record<any, any> | null {
	if (obj === null || obj === undefined) return null;
    if (typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(undefinedToNull);
    
    let res: { [key in string]: any} = {};
    for (let key in obj) {
        res[key] = undefinedToNull(obj[key]) as (Record<any, any> | null);
		return res
    }
};