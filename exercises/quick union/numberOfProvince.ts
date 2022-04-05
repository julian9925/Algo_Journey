class NumOfProvince {
    parents: number[] = [];

    constructor(size: number) {
        this.parents = new Array(size).fill(-1);
    }

    private union(x: number, y: number) {
        const rootX = this.find(x);
        const rootY = this.find(y);


        if (rootX !== rootY) {
            this.parents[rootX] = rootY;
        }
    }

    private find(x: number): number {
        if (this.parents[x] === -1) {
            return x;
        }

        return this.find(this.parents[x]);
    }

    findCirumNUmber(M: number[][]): number {
        for (let i = 0; i < M.length; i++) {
            for (let j = 0; j < M.length; j++) {
                if (M[i][j] === 1 && i != j) {
                    this.union(i,j);
                }
            }
        }

        let count = 0;
        for (let i = 0; i < this.parents.length; i++) {
            if (this.parents[i] === -1) {
                count++;
            }
        }

        return count;
    }
}

let matrix = [
    [1 ,1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1]
];

const numOfProvince = new NumOfProvince(matrix.length);
console.log(numOfProvince.findCirumNUmber(matrix));
