#### org.quickcorp.tools.effects.MoveYInFromBottom

Moves an object of the DOM from bottom to its original position using Y axis.

##### Usage:
```javascript
MoveYInFromBottom.apply(element)
```

##### Example:
```javascript
// the next line will move the body of every component named "comp1" from bottom to its original position
Tag('component[name=comp1]').map(componentBody => MoveYInFromBottom.apply(componentBody));
```
