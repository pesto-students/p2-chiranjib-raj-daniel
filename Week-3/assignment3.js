function createIncrement() {
    let count=0;
    function increment(){
        count++;
    }
    
    let message=`Count is ${count}`;
    function log(){
        console.log(message);
    }
    return [increment,log];

}

const [increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?

/* The output for the log message is 0 , that is due to count is declared 0 intitially and 
due to closure properties the value of count in log takes 0 which is initial assignment