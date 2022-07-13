def findDifference(arr,target):
    for currentValue in arr:
        if (currentValue - target) in arr:
            return 1
    return 0

print(findDifference([5, 10, 3, 2, 50, 80], 78))

# This is simple brut force algorithm where time complexity is O(n^2) since IN function takes O(n) for list in python
# space complecity O(1)

# Trying with hashmap(simple dictinary in python) and making solution to O(n) assuming searching in map is O(1)

def findDifferenceOpmtimized(arr,target):
    hMap = {}
    arr.sort()
    for currentValue in arr:
        difference = currentValue - target
        if difference in hMap.keys():
            return 1
        hMap[currentValue] = difference
    return 0

print(findDifferenceOpmtimized([5, 10, 3, 2, 50, 80], 78))