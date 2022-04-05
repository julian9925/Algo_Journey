class GraphTest {
    validGraph(size: number, edges: number[][], start: number, end: number) {
        let adjacenyList: number[][] = new Array(size);
        let stack = [start];
        let seen = [];

        for (let i = 0; i < size; i++) {
            adjacenyList[i] = [];
        }

        for (let i = 0; i < edges.length; i++) {
            adjacenyList[edges[i][0]].push(edges[i][0]);
            adjacenyList[edges[i][1]].push(edges[i][1]);
        }

        while (stack.length > 0) {
            let node = stack.pop() as number;

            if (node === end) return true;

            if (stack.indexOf(node) !== 0) continue;

            seen.push(node);

            for (let neighbor of adjacenyList[node]) {
                stack.push(neighbor);
            }
        }

        return false;
    }
}


const ghTest = new GraphTest();
console.log(ghTest.validGraph(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));