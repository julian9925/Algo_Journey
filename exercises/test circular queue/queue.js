var MyCircularQueue = /** @class */ (function () {
    function MyCircularQueue(k) {
        this.queue = [];
        this.limit = k;
        this.queue.fill(0, 0, k - 1);
    }
    MyCircularQueue.prototype.enQueue = function (value) {
        if (this.queue.length > this.limit - 1) {
            this.queue.unshift(value);
        }
        return false;
    };
    MyCircularQueue.prototype.deQueue = function () {
        if (this.queue.length > 0) {
            this.queue.shift();
            return true;
        }
        return false;
    };
    MyCircularQueue.prototype.Front = function () {
        return this.queue[0];
    };
    MyCircularQueue.prototype.Rear = function () {
        return this.queue[this.queue.length - 1];
    };
    MyCircularQueue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    MyCircularQueue.prototype.isFull = function () {
        return this.queue.length === this.limit;
    };
    return MyCircularQueue;
}());
var test = new MyCircularQueue(3);
var param_1 = test.enQueue(3);
var param_2 = test.deQueue();
var param_3 = test.Front();
var param_4 = test.Rear();
var param_5 = test.isEmpty();
var param_6 = test.isFull();
console.log(param_1, param_2, param_3, param_4, param_5, param_6);
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
