//implementing task with promises

function doTaskOne(){
    return new Promise((res, rej)=>{
        setTimeout(()=>res("Resolved task 1"), 2000)
    })
}
function doTaskTwo(){
    return new Promise((res, rej)=>{
        setTimeout(()=>res("Resolved task 2"), 2000)
    })
}
function doTaskThree(){
    return new Promise((res, rej)=>{
        setTimeout(()=>res("Resolved task 3"), 2000)
    })
}

// Calling and executing dotask's via async/await implementation

async function asyncImplement(){
    let task1 = await doTaskOne();
    console.log(task1);
    let task2 = await doTaskTwo();
    console.log(task2);
    let task3 = await doTaskThree();
    console.log(task3);
}

asyncImplement();

// calling and executing via generator functions
// making generator function a async/await funciton as doing .next on generator function result would give promise in pending state
async function* generatorImplement(){
    let task1 =  await doTaskOne();
    console.log(task1);
    yield task1;
    let task2 = await doTaskTwo();
    console.log(task2);
    yield task2;
    let task3 = await doTaskThree();
    console.log(task3);
    yield task3;
}

setTimeout(()=>{
    let generatorImplementation = generatorImplement();
generatorImplementation.next();
generatorImplementation.next();
generatorImplementation.next();
}, 6000)
