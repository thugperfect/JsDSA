class Stack{
    constructor (){
        this.stack = []
    }

    push(e){
        this.stack.push(e)
    }

    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }else{
          return this.stack.pop()
        }
       
    }
    isEmpty(){
        if(this.size() === 0){
            return true
        }else{
            return false
        }
    }
    size(){
        return this.stack.length
    }
    peek(){
        return this.stack[this.size()-1]
    }
    print(){
        return this.stack
    }
}

let stack =  new Stack()

stack.push(1)
stack.push(2)
stack.push(5)
stack.push(6)
stack.push(9)

stack.pop()

console.log(stack.print())