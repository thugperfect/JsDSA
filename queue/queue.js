class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(e){
        this.queue.push(e)
    }
    dequeue(){

        if(this.size() === 0) return "queue empty"
        return this.queue.shift()
    }

    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.queue.length
    }
    print(){
        let ret = 'Queue : '

        for (let index = 0; index < this.size(); index++) {
            ret+= this.queue[index]+" "
        }
        console.log(ret)
    }
}

let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(31)

queue.print()

queue.dequeue()

queue.print()