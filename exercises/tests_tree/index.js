/**
 * [
	 *  {
	 * 		id: 1,
	 * 		name: 'a',
	 * 		pid: 0,
     *  }	
 	]
 * @param {*} item 
 * @returns []
 * [
	 *  {
	 * 		id: 1,
	 * 		name: 'a',
	 * 		pid: 0,
	 *      children: [
	 *          {
	 *              id: 2,
	 *              name: 'b',
	 *              pid: 1
	 *          }
	 *      ]
 ]
 */

function treeRecurr(item) {
	let result = [];
	let map = {};
	item.forEach((item) => {
		map[item.id] = item;
	});

	item.forEach((item) => {
		let parent = map[item.pid];
		if (parent) {
			(parent.children || (parent.children = [])).push(item);
		} else {
			result.push(item);
		}
	});

	return result;
}

console.log(JSON.stringify(treeRecurr(
	[
		{ id: 1, name: 'a', pid: 0 },
		{ id: 2, name: 'b', pid: 1 },
		{ id: 3, name: 'c', pid: 1 },
		{ id: 4, name: 'd', pid: 3 },
		{ id: 5, name: 'e', pid: 4 }
	]
)));