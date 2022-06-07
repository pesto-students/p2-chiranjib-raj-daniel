const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
}
class MyPromise {
    constructor(callback) {
        // Initializing initial state of promise to pending
        this.state = STATE.PENDING;
        this.value = undefined;
        this.handlers = [];
        // Invoke callback by passing the _resolve and the _reject function of our class
        try {
        callback(this._resolve, this._reject);
        } catch (err) {
        this._reject(err)
        }
    }

    _resolve = (value) => {
        this.updateResult(value, STATE.FULFILLED);
    }
    
    _reject = (error) => {
        this.updateResult(error, STATE.REJECTED);
    }
    
    updateResult(value, state) {
        // This is to make the processing async
        setTimeout(() => {
        /*
            Process the promise if it is still in pending state. 
            An already rejected or resolved promise is not processed
          */
        if (this.state !== STATE.PENDING) {
            return;
        }
        
          // check is value is also a promise
        // if (isThenable(value)) {
        //     return value.then(this._resolve, this._reject);
        // }
        
        this.value = value;
        this.state = state;
        
          // execute handlers if already attached
        this.executeHandlers();
        }, 0);
    }

    then(onSuccess, onFail) {
        return new MyPromise((res, rej) => {
            this.addHandlers({
                onSuccess: function(value) {
                // if no onSuccess provided, resolve the value for the next promise chain
                if (!onSuccess) {
                    return res(value);
                }
                try {
                    return res(onSuccess(value))
                } catch(err) {
                    return rej(err);
                }
            },
            onFail: function(value) {
                // if no onFail provided, reject the value for the next promise chain
                if (!onFail) {
                    return rej(value);
                }
                try {
                    return res(onFail(value))
                } catch(err) {
                    return rej(err);
                }
            }
            });
        });
    }
    
    addHandlers(handlers) {
        this.handlers.push(handlers);
        this.executeHandlers();
    }
    
    executeHandlers() {
        // Don't execute handlers if promise is not yet fulfilled or rejected
        if (this.state === STATE.PENDING) {
            return null;
        }
    
        // We have multiple handlers because add them for .finally block too
        this.handlers.forEach((handler) => {
            if (this.state === STATE.FULFILLED) {
            return handler.onSuccess(this.value);
        } 
            return handler.onFail(this.value);
        });
        // After processing all handlers, we reset it to empty.
        this.handlers = [];
    }
    catch(onFail) {
        return this.then(null, onFail);
    }

    finally(callback) {
        return new MyPromise((res, rej) => {
            let val;
            let wasRejected;
            this.then((value) => {
                wasRejected = false;
                val = value;
                return callback();
            }, (err) => {
                wasRejected = true;
                val = err;
                return callback();
            }).then(() => {
             // If the callback didn't have any error we resolve/reject the promise based on promise state
            if(!wasRejected) {
            return res(val);
            } 
            return rej(val);
        })
        })
    }
}

let divideNumber = () => {
    return new MyPromise((onSuccess, onFail) => {
    setTimeout(() => {
        let genRandomNumber = Math.floor(Math.random() * 10000) + 10;
        console.log(genRandomNumber)
        if (genRandomNumber % 5 === 0) {
        onSuccess(genRandomNumber);
        } else {
            onFail(genRandomNumber);
        }
    }, 100);
    });
};


divideNumber()
.then((onResolve) => { console.log('${onResolve} is divisable by 5'); return})
.catch((onResolve) => { console.log('${onResolve} is not divisable by 5')});