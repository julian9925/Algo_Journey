// Recurrsicve approach

// function generateParenthesis(n: number): string[] {
// 	let res: string[] = [];
// 	generateParenthesisDfs(n, n, '', res) as string[];
// 	return res;
// };

// function generateParenthesisDfs(left: number, right: number, generate: string, result: string[]): string[] | undefined {
// 	if (left > right) {
// 		return;
// 	}
	
// 	if ( left === 0 && right === 0) {
// 		result.push(generate);
// 		return result;
// 	} else {
// 		if (left > 0) {
// 			console.log('left');
// 			generateParenthesisDfs(left-1, right,  generate + '(', result)
// 		} 
// 		if (right > 0) {
// 			console.log('right');
// 			generateParenthesisDfs(left, right-1,  generate + ')', result)
// 		}
// 	}
// }

// BFS approach

interface bfsNode {
	str: string;
	left: number;
	right: number;
}

function generateParenthesis(n: number): string[] {
	const res: string[] = [];
	const queue: bfsNode[] = [];

	queue.push({ str: "", left: n, right: n });


	while(!!queue.length) {
		let current = queue.shift() as bfsNode;
		if (current.left > current.right) {
			continue;
		}

		if (current.left === 0 && current.right === 0) {
			res.push(current.str);
		}

		else {
			if (current.left > 0) {
				queue.push({ str: current.str + '(' , left: current.left - 1, right: current.right });
			}

			if (current.right > 0) {
				queue.push({ str: current.str + ')' , left: current.left, right: current.right - 1});
			}
		}
	}


	return res;
}

console.log(generateParenthesis(3));