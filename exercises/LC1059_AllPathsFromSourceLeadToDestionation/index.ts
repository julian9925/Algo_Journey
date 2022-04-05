class LC1059 {
	leadsToDestination(n: number, edges: number[][], source: number, destination: number): boolean {
		let adjacenyList = new Array(n);
        for (let index = 0; index < adjacenyList.length; index++) {
            adjacenyList[index] = [];
        }

        let stack = [source];
        const seen: number[] = [];

        for (let index = 0; index < edges.length; index++) {
            adjacenyList[edges[index][0]].push(edges[index][1]);
            // adjacenyList[edges[index][1]].push(edges[index][0]);
        }

		while (stack.length !== 0) {
            const node = stack.pop() as number;

            if (node === destination) {
                return true;
            }

            if (seen.indexOf(node) !== -1) {
                continue;
            }

            seen.push(node);

            for (let neighbor of adjacenyList[node]) {
                stack.push(neighbor);
            }
        }

        return false;
	};
}

const lc1059 = new LC1059();
console.log(lc1059.leadsToDestination(3, [[0,1],[0,2]], 0, 2));