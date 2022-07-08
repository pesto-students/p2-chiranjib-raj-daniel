class Node:
	def __init__(self, data):
		self.data = data
		self.left = None
		self.right = None

# Returns true if given tree is BST.
def isBST(rootNode, left = None, right = None):

	# Base condition
	if (rootNode == None) :
		return True

    #check left node data
	if (left != None and rootNode.data <= left.data) :
		return False

    #check right node data
	if (right != None and rootNode.data >= right.data) :
		return False

	# check recursively for every node.
	return isBST(rootNode.left, left, rootNode) and \
		isBST(rootNode.right, rootNode, right)


rootNode = Node(3)
rootNode.left = Node(2)
rootNode.right = Node(5)
rootNode.right.left = Node(4) # is we set this node data to 1 we would get not BST as ans
rootNode.right.right = Node(7)

if (isBST(rootNode,None,None)):
	print("Is BST")
else:
	print("Not a BST")

