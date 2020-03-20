# Algorithms

This is simply a class of functions that I've written over time to practice my algorithms and to use when needed.

## Getting Started

These instructions will get you using the class

### Install the package

```
npm install https://github.com/wiljohnston/Algorithms
```

### Running

```
const al = require('algorithms');

```

### Examples

```
al.breadthFirstSearch(node, n => console.log(n.id));

al.depthFirstSearch(node, n => n.property === something ? n : undefined);

al.depthFirstSearchRecursive(node, n => n.children.length === 4 ? n : undefined);
```

### callback parameter

The second parameter is the callback. Each node is passed into it, and the first defined value returned will be returned by the calling function.
The callback doesn't have to return anything - it could just log each node to the console, for example.
