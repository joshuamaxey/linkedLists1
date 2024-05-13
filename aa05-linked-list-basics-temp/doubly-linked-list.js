// Define a class for a node in a doubly linked list
class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;   // Value stored in the node
    this.prev = null;   // Reference to the previous node (initially null)
    this.next = null;   // Reference to the next node (initially null)
  }
}

// Define a class for a doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null;    // Reference to the head node of the doubly linked list
    this.tail = null;    // Reference to the tail node of the doubly linked list
    this.length = 0;     // Length of the doubly linked list
  }

  // Method to add a new node to the head of the list
  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val); // Create a new node with the given value
    
    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty
      newNode.next = this.head;   // Set the next of the new node to the current head
      this.head.prev = newNode;   // Set the previous of the current head to the new node
      this.head = newNode;        // Update the head of the list to the new node
    }

    this.length++;  // Increment the length of the list
  }

  // Method to add a new node to the tail of the list
  addToTail(val) {
    const newNode = new DoublyLinkedListNode(val); // Create a new node with the given value

    if (!this.tail) {
      // If the list is empty, set the new node as both head and tail
      this.tail = newNode;
      this.head = newNode;
    } else {
      // If the list is not empty
      newNode.prev = this.tail;   // Set the previous of the new node to the current tail
      this.tail.next = newNode;   // Set the next of the current tail to the new node
      this.tail = newNode;        // Update the tail of the list to the new node
    }

    this.length++;  // Increment the length of the list
  }

  // Method to print the values of the nodes in the list
  print() {
    let current = this.head;   // Start with the head node

    while (current) {
      process.stdout.write(`${current.value} <-> `);  // Print the value of the current node
      current = current.next;  // Move to the next node
    }

    console.log("NULL");  // Print NULL after reaching the end of the list
  }
}

module.exports = DoublyLinkedList;