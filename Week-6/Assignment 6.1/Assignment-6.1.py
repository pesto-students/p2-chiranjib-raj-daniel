# solving dynamic programming approach

def contiguousSum(arr):
    maximumValue = float('-inf') # setting final max value to lowest value
    iterationValue = 0
    arrLen = len(arr)

    for x in range(arrLen):
        iterationValue = max( arr[x] , (arr[x] + iterationValue)) # assinging intermediatery value as max of current and sum of previous and current value
        if (iterationValue > maximumValue):
            maximumValue = iterationValue    # assigning max value if the current intermediary value is greater than max sum value
    return maximumValue


print(contiguousSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

