function processData(input) {
    class Queue {
        constructor() {
            this.stack1 = [];
            this.stack2 = [];
        }

        enqueue(data) {
            // while (this.stack1.length) {
            //     this.stack2.push(this.stack1.pop());
            // }
             

            this.stack1.push(data);

            // while (this.stack2.length) {
            //     this.stack1.push(this.stack2.pop());
            // }
        }

        dequeue() {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
            
            const data = this.stack2.pop();
            // const data = this.stack1.pop(); 

            while (this.stack2.length) {
                this.stack1.push(this.stack2.pop());
            }

            return data;
        }

        getFrontElement() {
            return this.stack1[0];
            // return this.stack1[this.stack1.length - 1]; 
        }
    }

    input = input.split("\n").slice(1);
    let queue = new Queue();

    input.forEach(op => {
        if (op[0] == '1') {
            queue.enqueue(op.split(" ")[1]);
        } else if (op[0] == '2') {
            queue.dequeue();
        } else {
            console.log(queue.getFrontElement());
        }
    });
}
