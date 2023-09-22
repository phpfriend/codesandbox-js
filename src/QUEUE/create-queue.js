class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const value = this.items[this.front];
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.front === this.rear;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.size());
console.log(queue.print());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.size());
