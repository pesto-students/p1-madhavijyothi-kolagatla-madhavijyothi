List<List<Integer>> result = new ArrayList<>();

    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {

        dfs(graph, 0, graph.length - 1, new ArrayList<>());
        return result;
    }

    private void dfs(int[][] graph, int source, int destination, List<Integer> list) {
        list.add(source);
        if (source == destination) {
            result.add(list);
            return;
        }
        for (int neighbor : graph[source]) {
            dfs(graph, neighbor, destination, new ArrayList<>(list));
        }
    }