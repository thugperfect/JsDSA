var MyCircularQueue = function(k) {
    
    this.queue = []
    this.size = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.size === this.queue.length) return false

    this.queue.push(value)
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.queue.length === 0) return false
    this.queue.shift()
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.queue.length === 0) return false
    return this.queue[0]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {

    if(this.queue.length === 0) return false
    return this.queue[this.queue.length -1]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.queue.length === this.size
};


let queue = new MyCircularQueue(5)

queue.enQueue(1)
queue.enQueue(2)

console.log(queue.Front(),queue.Rear())

queue.deQueue()

console.log(queue.Front(),queue.Rear())

