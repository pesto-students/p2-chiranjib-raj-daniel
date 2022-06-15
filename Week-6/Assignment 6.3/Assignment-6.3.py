# bruteforce algo
unsortedArrray = [2,0,1,2,1,2,0,0,0,1,2,2,1]

countOfZero = 0
countOfOne = 0
countOfTwo = 0


for value in unsortedArrray:
    if value ==0:
        countOfZero +=1
    elif value == 1:
        countOfOne+=1
    elif value == 2:
        countOfTwo+=1

sortedArray = []
sortedArray += [0] * countOfZero
sortedArray += [1] * countOfOne
sortedArray += [2] * countOfTwo

print(sortedArray)


# the above algo is brute force algo and takes O(n) in time complexity and O(n) in space complexity