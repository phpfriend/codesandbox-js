class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peak() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

stack.push(12);
stack.push(10);
stack.push(9);

console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.print());
console.log(stack.peak());
console.log(stack.pop());
console.log(stack.size());
