class MyCircularQueue {
    private queue: number[] = [];
    private capacity: number;
    private size: number;
    private front = 0;
    private rear = 0;
    
    constructor(k: number) {
        this.capacity = k;
        this.queue = new Array(this.capacity);

        this.size = 0;
        this.front = 0;
        this.rear = 0;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }

        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return true;
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.queue[this.front];
    }

    Rear(): number {
        return this.isEmpty() ? -1 : this.queue[this.rear];
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isFull(): boolean {
        return this.size === this.capacity;
    }

    get getQueue() {
        return this.queue;
    }
}

const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear());     // return 3
console.log(myCircularQueue.isFull());   // return True
console.log(myCircularQueue.deQueue());  // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear());     // return 4


/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */