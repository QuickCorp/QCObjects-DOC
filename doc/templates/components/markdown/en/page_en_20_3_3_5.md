#### org.quickcorp.tools.effects.MoveYInFromTop

Moves an object of the DOM from top to its original position using Y axis.

##### Usage:
```javascript
MoveYInFromTop.apply(element)
```

##### Example:
```javascript
// the next line will move the body of every component named "comp1" from top to its original position
Tag('component[name=comp1]').map(componentBody => MoveYInFromTop.apply(componentBody));
```
