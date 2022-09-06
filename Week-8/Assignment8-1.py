# A binary tree node
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

#travering recursively through the nodes and getting the values
def maxDepth(node):
    if node is None:
        return 0 
    else :
        leftDepth = maxDepth(node.left)
        rightDepth = maxDepth(node.right)

    # Use the larger one
    if (leftDepth > rightDepth):
        return leftDepth+1
    else:
        return rightDepth+1

#adding the nodes for the tess
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)


print ("Height of tree is %d" %(maxDepth(root)))
