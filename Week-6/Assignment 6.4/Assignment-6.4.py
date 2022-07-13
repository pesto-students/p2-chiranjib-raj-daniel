def maxProfit(arr):
    profit = 0
    buyDay = min(arr)
    sellDay = max(arr)
    for value in range(len(arr)):
        if (arr.index(buyDay) < arr.index(sellDay)):
            profit =  sellDay - buyDay
            return profit
        arr.remove(sellDay)
        sellDay= max(arr)
    
    return 0

print(maxProfit([7,1,5,3,6,4]))