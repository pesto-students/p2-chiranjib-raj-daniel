from inspect import stack


class queue:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []
    
    def enqueue(self,data):
        while (len(self.stack1) != 0):
            self.stack2.append(self.stack1[len(self.stack1)-1])
            self.stack1.pop()
        self.stack1.append(data)
        while (len(self.stack2) != 0):
            self.stack1.append(self.stack2[len(self.stack2)-1])
            self.stack2.pop()

    def dequeue(self):
        if (len(self.stack1) == 0):
            print("Queue underflow")
        topelm = self.stack1[len(self.stack1)-1]
        self.stack1.pop()
        return topelm

queue1 = queue()
keys = [12,3,1,5,6,15,99]

for key in keys:
    queue1.enqueue(key)
print(queue1.dequeue())