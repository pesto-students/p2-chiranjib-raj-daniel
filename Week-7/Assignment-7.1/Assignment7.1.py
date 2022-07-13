
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

    # Function to reverse the linked list
    def reverse(self):
        prev = None
        current = self.head
        while(current is not None):
            next = current.next
            current.next = prev
            prev = current
            current = next
        self.head = prev

    # Function to insert a new node at the beginning
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    # Utility function to print the LinkedList
    def printList(self):
        temp = self.head
        while(temp):
            print (temp.data,end=" ")
            temp = temp.next

linklist = LinkedList()
linklist.createLS([77,12,3,5,34,65,89])
# linklist.printList()
linklist.reverse()
linklist.printList()