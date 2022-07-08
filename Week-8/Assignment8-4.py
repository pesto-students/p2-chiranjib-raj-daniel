graph = []

def addEdge(v, w):
	global graph
	graph[v].append(w)
	graph[w].append(v)

def dfs(adj, visit, start, end):
	if(end == start):
		return True
	
	visit[start] = 1

	for it in adj[start]:
		if(visit[it]==0):
			if(dfs(adj, visit, it, end)):
				return True
	
	return False

def validPath(n, edges, start, end):
	adj = [[] for _ in range(n)]

	for i in range(len(edges)):
		u = edges[i][0]
		v = edges[i][1]
		adj[u].append(v)
		adj[v].append(u)
	
	visit = [0]*n
	for i in range(n):
		if(visit[i] == 0):
			if(dfs(adj, visit, start, end)):
				return True
	
	return False


n = 4
# creating a graph
graph = [[] for _ in range(n)]

addEdge(0,1)
addEdge(0,2)
addEdge(1,2)
addEdge(2,0)
addEdge(2,3)
addEdge(3,3)

u = 1
v = 3
if (validPath(n, graph, u, v)):
	print("There is a path from", u, "to", v)
else:
	print("There is no path from", u, "to", v)

