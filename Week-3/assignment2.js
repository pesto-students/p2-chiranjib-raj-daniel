// // creating binded multiplication function where the argument value are bounded to function and it cant be changed

function multiplication(a,b){
    return this.a * this.b;
}

const boundMultiply = multiplication.bind({a:250,b:250});

console.log(boundMultiply())


// below is a call function

function multiplicationCall(){
    return this.a * this.b;
}

var arguments = {
    a:5 , b:10
}

console.log(multiplicationCall.call(arguments))

// function with apply 

var numbers = [2,5,7,55,66]

var min = Math.min.apply(null,numbers)

console.log(min);