import {Sorter} from './Sorter';
import {Node} from './Node';

export class LinkedList extends Sorter {
  head: Node | null = null;
  
  constructor() {
    super();
  }

  add(data: number): void {
    const node = new Node(data);

    if(!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while(tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if(!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while(node.next) {
      length += 1;
      node = node.next;
    }

    return length;
  }

  indexOf(idx: number): Node {
    if(!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while(node) {
      if(counter === idx) {
        return node;
      }

      counter += 1;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if(!this.head) {
      throw new Error('List is empty');
    }

    return this.indexOf(leftIndex).data > this.indexOf(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.indexOf(leftIndex);
    const rightNode = this.indexOf(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  toString(): void {
    if(!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while(node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

