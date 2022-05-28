function createStack() {
    const items = [];
    return {
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}

const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5


