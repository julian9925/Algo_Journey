class lesson797 {
    graph: number[][];
    result: number[][];

    constructor() {
        this.graph = [];
        this.result = [];
    }

    sourceToTarget(graph: number[][]): number[][] {
        const result = []

        function dfs(index: number, stack: number[]) {
            if (stack.indexOf(index) > -1) return;
    
            stack.push(index);
    
            if (index === graph.length -1) {
                result.push(stack);
            } else {
                graph[index].forEach((node) => {
                    dfs(node, [...stack]);
                });
            }
        }

        dfs(0, []);
        return this.result;
    }
}

const rst = new lesson797();
console.log(rst.sourceToTarget([[1,2], [3], [3], []]));