export default class Graph {
    validGraph(size: number, edges: number[][], start: number, end: number) {
        let adjacenyList = new Array(size);
        for (let index = 0; index < adjacenyList.length; index++) {
            adjacenyList[index] = [];
        }


        let stack = [start];
        const seen: number[] = [];

        for (let index = 0; index < edges.length; index++) {
            adjacenyList[edges[index][0]].push(edges[index][1]);
            adjacenyList[edges[index][1]].push(edges[index][0]);
        }

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

        return false;
    }
}