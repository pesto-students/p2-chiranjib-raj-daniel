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
    
    def detectLoop(self):
        slow_p = self.head
        fast_p = self.head
        while(slow_p and fast_p and fast_p.next):
            slow_p = slow_p.next
            fast_p = fast_p.next.next
            if slow_p == fast_p:
                return True





linklist = LinkedList()
linklist.createLS([77,12,3,5,34,65,89])
# linklist.printList()
linklist.head.next.next.next = linklist.head
if(linklist.detectLoop()):
    print ("Found Loop")
else:
    print ("No Loop")