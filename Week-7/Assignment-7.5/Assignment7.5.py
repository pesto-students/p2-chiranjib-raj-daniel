from collections import deque

def findNextGreaterElements(input):

    # base case
    if not input:
        return

    result = [-1] * len(input)

    # creating an empty stack
    s = deque()

    # do for each element
    for i in range(len(input)):
        while s and input[s[-1]] < input[i]:   #looping through the stack and checking for any value smaller than the current and updating it
            result[s[-1]] = input[i]
            s.pop()

        # push current "index" into the stack
        s.append(i)

    return result




input = [2, 7, 3, 5, 4, 6, 8]
print(findNextGreaterElements(input))