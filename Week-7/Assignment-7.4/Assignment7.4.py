
def parenthesisChecker(arr):
    charStack = []
    openTags = ["(","[","{"]
    closeTags = [")","]","}"]

    for value in range(len(arr)):
        if arr[value]  in openTags:
            print(value)
            charStack.append(arr[value])
        elif arr[value]  in closeTags:
            print(value)
            if charStack.pop() != value:
                return False
            else:
                pass
    return True 

print(parenthesisChecker(list("{}[]()")))