import Graph from './graph';

const graph = new Graph();

test("n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2 for true", () => {
    expect(graph.validGraph(3, [[0,1],[1,2],[2,0]], 0, 2)).toEqual(true);
});

test("n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0\
    , destination = 5 for false", () => {
    expect(graph.validGraph(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)).toEqual(false);
});
