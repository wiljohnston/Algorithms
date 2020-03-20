# Algorithms

This is simply a class of functions that I've written over time to practice my algorithms and to use when needed.

### Note on README formatting
I'm not sure why the markdown is indented after every paragraph. It doesn't do that on other markdown editors.

## Getting Started

These instructions will get you using the class

### Install the package

```
npm install https://github.com/wiljohnston/algorithms
```

### Running

```js
const al = require("algorithms");
```


### algorithms.breadthFirstSearch(node, callback, childrenPropertyName = "children")

- `node` <Object> The root node.
- `callback` <function> The function to perform on each node; first defined callback return value will be returned by breadthFirstSearch.
- `childrenPropertyName` <?String> (`default="children"`) The property name of the node object that points to an array of its children nodes.

- returns: <any> Returns whatever the callback returns, or nothing.

This method perform a breadth first search, using an array as a queue. It can perform some passive action on each node, like a `console.log`, or it could check some property of the node and return the node itself, or an index, etc.


### algorithms.depthFirstSearch(node, callback, childrenPropertyName = "children")

- `node` <Object> The root node.
- `callback` <function> The function to perform on each node; first defined callback return value will be returned by breadthFirstSearch.
- `childrenPropertyName` <?String> (`default="children"`) The property name of the node object that points to an array of its children nodes.

- returns: <any> Returns whatever the callback returns, or nothing.

This method perform a depth first search, using an array as a stack. It can perform some passive action on each node, like a `console.log`, or it could check some property of the node and return the node itself, or an index, etc.


### algorithms.depthFirstSearchRecursive(node, callback, childrenPropertyName = "children")

- `node` <Object> The root node.
- `callback` <function> The function to perform on each node; first defined callback return value will be returned by breadthFirstSearch.
- `childrenPropertyName` <?String> (`default="children"`) The property name of the node object that points to an array of its children nodes.

- returns: <any> Returns whatever the callback returns, or nothing.
  
This method perform a depth first search, using recursive calls. It can perform some passive action on each node, like a `console.log`, or it could check some property of the node and return the node itself, or an index, etc.

### callback(node)

- `node` <Object> The root currently being processes.
- returns: <any> Can be a passive call, like `console.log`, or can return some value to be returned by the top-level function.
  
Each node that is processed is passed into the callback, and the first defined value returned will be returned by the calling function.

### Examples

```js
// Passive callback
al.breadthFirstSearch(node, n => console.log(n.id));

// Return the node with some property
al.depthFirstSearch(node, n => (n.property === something ? n : undefined));

// Return the node with four children
al.depthFirstSearchRecursive(node, n =>
  n.children.length === 4 ? n : undefined
);
```
