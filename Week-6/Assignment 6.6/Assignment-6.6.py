# 3 sum

from ipaddress import summarize_address_range


def sumOfClosest(arr,target):
    size = len(arr) - 2
    sumMap={}

    for i in range(size):
        sum = arr[i]+arr[i+1]+arr[i+2]
        sumMap[sum-target]=(sum)
    if (target >= 0):
        closestKey=min(keys for keys in sumMap.keys() if keys>=0)
    else:
        closestKey=max(keys for keys in sumMap.keys() if keys<=0)
    return sumMap[closestKey]

print(sumOfClosest([-1, 2, 1, -4], 1))

# Time complexity O(n)
# Space complexity O(1)