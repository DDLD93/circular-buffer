//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {

    this.memory = new Array(size);
    this.head = 0;
    this.tail = 0;
    this.isFull = false;
  }

  write() {
    if (this.isFull) {
      console.error('Buffer full');
      return;
    } else {
      this.head = this.next(this.head);
      this.memory[this.head] = value;
      if (this.head === this.tail) {
        this.isFull = true;
      }
    }
  }

  read() {
    if (this.tail === this.head && !this.isFull) {
      console.log('Nothing to read.');
    } else {
      this.tail = this.next(this.tail);
      this.isFull = false;
      return this.memory[this.tail];
    }
  }

  forceWrite() {
      this.head = this.next(this.head);
      this.memory[this.head] = value;
      if (this.head === this.tail) {
        this.isFull = true;
      }
    }

  clear() {
    this.memory = null
  }
}



export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }
}
