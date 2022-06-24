def parenthesisChecker(arr):
    charStack = []                   #empty arrray to store the opening characters
    openTags = ["(","[","{"]         # opening comparison characters
    closeTags = [")","]","}"]        # closing comparison characters

    for value in range(len(arr)):
        if arr[value]  in openTags:
            charStack.append(arr[value])            # appending to charstack if iterator value belongs to opening tag
        elif arr[value]  in closeTags:
            checkTag=charStack.pop()                # poping and storing the opening tag into temp variable
            if arr[value] == "]" and checkTag == "[":       # comparing opening and closing tag belongs to same group or not, passing if the same if not returning false
                pass
            elif arr[value] == ")" and checkTag == "(":
                pass
            elif arr[value] == "}" and checkTag == "{":
                pass
            else:
                return False
    return True 

print(parenthesisChecker(list("{[}]()")))  # passing the string into list(array)



# time complexity is O(n)
# space complexity is O(n)