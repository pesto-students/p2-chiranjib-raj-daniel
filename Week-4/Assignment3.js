let fib={
    number:7,
[Symbol.iterator](){
    let i=1;
    let nth =0,nplusone=0;
    return {
        next:()=>{
            [nth,nplusone]= [nplusone,(nth + nplusone) || 1 ];
            return {value:nth, done: i++ > this.number};
        },
    }
}
};


for (const fibseq of fib){
    console.log(fibseq);
}