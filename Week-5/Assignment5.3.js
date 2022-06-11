function findDuplicate(arr){
    let isDuplicate = false;
    const setArray = new Set(arr);
    const checkDuplicate = arr.filter(item =>{
        if (setArray.has(item)){
            setArray.delete(item);
        }else{
            return item
        }
    })
    if (checkDuplicate.length !==0){
        isDuplicate = true;
    }else{}
    console.log(checkDuplicate)
    return isDuplicate
}


let duplicate= findDuplicate([1,1,2,3,4,5,6,7])
console.log(duplicate)

