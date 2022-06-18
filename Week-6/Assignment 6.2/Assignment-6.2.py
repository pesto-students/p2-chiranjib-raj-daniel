def printSprialOrder(matrix):
    spiralOrderAns=[]
    rowsEnd = len(matrix)
    columnsEnd = len(matrix[0])
    rowsStart = 0
    columnsStart = 0

    while(rowsStart<rowsEnd and columnsStart<columnsEnd):

        for iterator in range(columnsEnd):
            spiralOrderAns.append(matrix[rowsStart][iterator])
        rowsStart+=1

        for iterator in range(rowsStart, rowsEnd):
            spiralOrderAns.append(matrix[iterator][columnsEnd-1])
        columnsEnd-=1

        if (rowsStart<rowsEnd):
            for iterator in reversed(range((columnsEnd))):
                spiralOrderAns.append(matrix[rowsEnd-1][iterator])
            rowsEnd-=1
        
        if (columnsStart<columnsEnd):
            for iterator in range(rowsEnd,rowsStart):
                spiralOrderAns.append(matrix[iterator][columnsStart])
            columnsStart+=1
    return spiralOrderAns

print(printSprialOrder([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]))

# Time complexity O(n)
#Space comexity O(n)



