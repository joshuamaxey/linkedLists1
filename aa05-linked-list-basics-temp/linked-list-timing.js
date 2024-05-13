const LinkedList = require('./linked-list.js'); // Importing the singly linked list class
const DoublyLinkedList = require('./doubly-linked-list.js'); // Importing the doubly linked list class

// Function to measure the execution time of a callback function
function measureExecutionTime(callback) {
  const startTime = performance.now(); // Get the start time using performance.now()
  callback(); // Call the provided callback function
  const endTime = performance.now(); // Get the end time using performance.now()
  return endTime - startTime; // Return the time taken for execution
}

// Test timing for singly linked list
const linkedListTiming = {
  addToHeadTime: measureExecutionTime(() => { // Measure the time taken to add elements to the head of a singly linked list
    const linkedList = new LinkedList(); // Create a new instance of a singly linked list
    for (let i = 0; i < 1000; i++) {
      linkedList.addToHead(i); // Add elements to the head of the singly linked list
    }
  }),
  addToTailTime: measureExecutionTime(() => { // Measure the time taken to add elements to the tail of a singly linked list
    const linkedList = new LinkedList(); // Create a new instance of a singly linked list
    for (let i = 0; i < 1000; i++) {
      linkedList.addToTail(i); // Add elements to the tail of the singly linked list
    }
  })
};

// Test timing for doubly linked list
const doublyLinkedListTiming = {
  addToHeadTime: measureExecutionTime(() => { // Measure the time taken to add elements to the head of a doubly linked list
    const doublyLinkedList = new DoublyLinkedList(); // Create a new instance of a doubly linked list
    for (let i = 0; i < 1000; i++) {
      doublyLinkedList.addToHead(i); // Add elements to the head of the doubly linked list
    }
  }),
  addToTailTime: measureExecutionTime(() => { // Measure the time taken to add elements to the tail of a doubly linked list
    const doublyLinkedList = new DoublyLinkedList(); // Create a new instance of a doubly linked list
    for (let i = 0; i < 1000; i++) {
      doublyLinkedList.addToTail(i); // Add elements to the tail of the doubly linked list
    }
  })
};

// Output the timing results for singly linked list operations
console.log("Singly Linked List Timing Results:");
console.log("Add to Head Time:", linkedListTiming.addToHeadTime); // Display the time taken to add to the head
console.log("Add to Tail Time:", linkedListTiming.addToTailTime); // Display the time taken to add to the tail

// Output the timing results for doubly linked list operations
console.log("\nDoubly Linked List Timing Results:");
console.log("Add to Head Time:", doublyLinkedListTiming.addToHeadTime); // Display the time taken to add to the head
console.log("Add to Tail Time:", doublyLinkedListTiming.addToTailTime); // Display the time taken to add to the tail