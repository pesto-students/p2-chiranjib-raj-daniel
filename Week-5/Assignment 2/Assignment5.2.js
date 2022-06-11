function isVowel(value){
    return "aeiou".includes(value);
}


function vowelCount(vowelString){
    const vowelMap= new Map();
    for(let char of vowelString){
        let lowercaseChar = char.toLowerCase();
        if(isVowel(lowercaseChar)){
            if(vowelMap.has(lowercaseChar)){
                vowelMap.set(lowercaseChar,vowelMap.get(lowercaseChar)+1);
            }else{
                vowelMap.set(lowercaseChar,1)
            }
        }
    }
    return vowelMap;
}

let counts = vowelCount("daaniel")
console.log(counts)