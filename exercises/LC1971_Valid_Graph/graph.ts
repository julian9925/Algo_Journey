class Graph {
    validGraph(size: number, edges: number[][], start: number, end: number) {
        let adjacenyList = new Array(size);
        for (let index = 0; index < adjacenyList.length; index++) {
            adjacenyList[index] = [];
        }


        let stack = [start];
        const seen: number[] = [];

        for (let index = 0; index < edges.length; index++) {
            adjacenyList[edges[index][0]].push(edges[index][1]);
        }

        console.log(adjacenyList);

        while (stack.length !== 0) {
            const node = stack.pop() as number;

            if (node === end) {
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

        console.log(seen);

        return false;
    }
}

const gh = new Graph();
console.log(gh.validGraph(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));