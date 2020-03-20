class Algorithms {
  constructor() {
    this.queue = [];
    this.stack = [];
    this.seen = {};
  }

  /**
   * Re-initialises data structure properties for a new algorithm execution. 
   * @return {null} No return value. 
   */
  reset() {
    this.queue = [];
    this.stack = [];
    this.seen = {};
  }

  /**
   * Perform a breadth first search, using an array as a queue.
   * @param {Object} node The root node.
   * @param {function} callback The function to perform on each node; first defined callback return value will be returned by breadthFirstSearch.
   * @param {string} [childrenPropertyName="children"] The property name of the node object that points to an array of its children nodes.
   * 
   * @return {any} Returns whatever the callback returns, or nothing.
   */
  breadthFirstSearch(node, callback, childrenPropertyName = "children") {
    // Reset our 'queue'
    this.reset();

    this.queue.push(node);

    while (this.queue.length > 0) {
      let current = this.queue.shift();

      if (!Object.keys(this.seen).includes(current)) {
        this.seen[current] = true; // Add node to seen

        let processResult = callback(current); // Process it
        
        if(processResult !== undefined){
          return processResult; // Return the result if we have any
        }
      }

      // Add unseen children of the node
      let unseenChildren = current[childrenPropertyName].filter(
        child => !Object.keys(this.seen).includes(child)
      );
      this.queue = [...this.queue, ...unseenChildren];
    }
  }

  /**
   * Perform a depth first search, using an array as a stack.
   * @param {Object} node The root node.
   * @param {function} callback The function to perform on each node; first defined callback return value will be returned by depthFirstSearch.
   * @param {string} [childrenPropertyName="children"] The property name of the node object that points to an array of its children nodes.
   * 
   * @return {any} Returns whatever the callback returns, or nothing.
   */
  depthFirstSearch(node, callback, childrenPropertyName = "children") {
    // Reset our 'stack'
    this.reset();

    this.stack.push(node);

    while (this.stack.length > 0) {
      let current = this.stack.pop();

      if (!Object.keys(this.seen).includes(current)) {
        this.seen[current] = true; // Add current node to seen

        let processResult = callback(current); // Process it

        if(processResult !== undefined){
          return processResult; // Return the result if we have any
        }

      }

      // Add unseen children to the stack
      let unseenChildren = current[childrenPropertyName].filter(
        child => !Object.keys(this.seen).includes(child)
      );
      this.stack = [...this.stack, ...unseenChildren.reverse()];
    }
  }

  // callback(node) will be called with each node, first defined value returned will be passed up the stack immediately
  // pre-order search if you're searching a binary tree
  /**
   * Perform a depth first search using recursive calls; a pre-order tree traversal.
   * @param {Object} node The root node.
   * @param {function} callback The function to perform on each node; first defined callback return value will be returned by depthFirstSearch.
   * @param {string} [childrenPropertyName="children"] The property name of the node object that points to an array of its children nodes.
   * 
   * @return {any} Returns whatever the callback returns, or nothing.
   */
  depthFirstSearchResursive(node, callback, childrenPropertyName = "children") {
    // Reset our 'seen' object
    this.reset();
    
    // If we haven't seen this node yet
    if (!Object.keys(this.seen).includes(node)) {
      this.seen[node] = true; // Add to seen

      let processResult = callback(node); // Process it

      if (processResult !== undefined) {
        return processResult; // If we found something, pass it up
      }
    }

    for (var next of node[childrenPropertyName]) {

      let returnValue = this.depthFirstSearchResursive(next, callback);

      if (returnValue !== undefined) {
        return returnValue;
      }
    }

    return undefined;
  }
}

module.exports = new Algorithms();