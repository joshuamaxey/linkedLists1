class LinkedListNode {
  // Represents a node in the linked list with a value and a reference to the next node
  constructor(val) {
    this.value = val; // Assign the provided value to the node
    this.next = null; // Initialize the next node reference to null
  }
}

class LinkedList {
  // Represents a linked list with a head node and a length to track the number of nodes
  constructor() {
    this.head = null; // Initially set the head to null as the list is empty
    this.length = 0; // Initialize the length of the linked list to 0
  }

  // Add a new node to the beginning of the linked list (at the head)
  addToHead(val) {
    const newNode = new LinkedListNode(val); // Create a new node with the provided value

    newNode.next = this.head; // Set the next reference of the new node to the current head
    this.head = newNode; // Update the head of the linked list to the new node
    this.length++; // Increment the length of the linked list
  }

  // Add a new node to the end of the linked list (at the tail)
  addToTail(val) {
    const newNode = new LinkedListNode(val); // Create a new node with the provided value

    if (!this.head) {
      // If the linked list is empty, set the new node as the head
      this.head = newNode;
    } else {
      // Traverse the linked list to find the last node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode; // Set the next reference of the last node to the new node
    }

    this.length++; // Increment the length of the linked list
  }

  // Print the linked list by traversing and outputting the values
  print() {
    let current = this.head;

    while (current) {
      // Output the value of the current node followed by an arrow
      process.stdout.write(`${current.value} -> `);
      current = current.next; // Move to the next node
    }

    console.log("NULL"); // Indicate the end of the linked list
  }
}

// - `LinkedListNode` represents a node in the linked list with a value and a reference to the next node.
// - `LinkedList` represents the linked list with a head node and a length to track the number of nodes.
// - `addToHead` adds a new node to the beginning of the linked list.
// - `addToTail` adds a new node to the end of the linked list.
// - `print` method is provided for debugging purposes to print out the values in the linked list.
module.exports = LinkedList;
