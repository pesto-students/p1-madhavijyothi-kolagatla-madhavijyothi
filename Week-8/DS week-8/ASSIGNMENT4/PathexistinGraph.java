class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
       ArrayList<ArrayList<Integer>> adj = new  ArrayList<ArrayList<Integer>>(n);
        adjList(adj, n, edges);
        boolean visited[] = new boolean[n];
        return dfs(adj, source, destination, visited);
       
        }
    
    public boolean dfs( ArrayList<ArrayList<Integer>> adj, int s, int d, boolean[] visited){
        if(s==d) return true;
        visited[s] = true;
        for(int i: adj.get(s)){
            if(visited[i]==false){
                if (dfs(adj, i, d,  visited) == true) return true;
            }
        }
        return false;
    }
    
    
    
    
    public void adjList( ArrayList<ArrayList<Integer>> adj, int v, int[][] edges){
        for(int i=0; i<v; i++){
            adj.add(new ArrayList<Integer>());
        }
        for(int i=0; i<edges.length; i++){
            int a = edges[i][0];
            int b = edges[i][1];
            adj.get(a).add(b);
            adj.get(b).add(a); 
        }
    }
}