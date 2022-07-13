# implementing rotation of linkelist


# the below implementation was allready solved in instructor class so solving with python and following same method as taught in instructor class

class Node:
    def __init__(self, init_data):
        self.data = init_data
        self.next = None

class LinkedList:

    # Function to initialize head
    def __init__(self):
        self.head = None
    # function to create linked list from supplied array
    def createLS(self, arr):
        self.head = Node(arr[0])
        current = self.head
        for i in range(1, len(arr)):
            current.next = Node(arr[i])
            current = current.next

    # Utility function to print the LinkedList
    def printList(self):
        temp = self.head
        while(temp):
            print (temp.data,end=" ")
            temp = temp.next
            
    def rotate(self, k):
        if k == 0: 
            return 

        current = self.head
        count = 1 
        while(count <k and current is not None):
            current = current.next
            count += 1

        if current is None:
            return

        kthNode = current 

        while(current.next is not None):
            current = current.next

        current.next = self.head
        self.head = kthNode.next
        kthNode.next = None





linklist = LinkedList()
linklist.createLS([77,12,3,5,34,65,89])
# linklist.printList()
linklist.rotate(4)
linklist.printList()