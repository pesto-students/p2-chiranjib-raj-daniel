
class Node:
	def __init__(self, data):
		self.val = data
		self.left = None
		self.right = None
		

def printLevelOrder(root):
	if root is None:
		return
	queue = []
	valuesArr=[]
	queue.append(root)
	while queue:
		count = len(queue)
		while count > 0:
			temp = queue.pop(0)
			valuesArr.append(temp.val)
			if temp.left:
				queue.append(temp.left)
			if temp.right:
				queue.append(temp.right)
			count -= 1
	print(valuesArr)

#initializing data
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.right = Node(6)

printLevelOrder(root)