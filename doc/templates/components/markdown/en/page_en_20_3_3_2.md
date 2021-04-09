#### org.quickcorp.tools.effects.MoveXInFromRight

Moves an element from the right side in X axis to the original position of the object.

##### Usage:

```javascript
MoveXInFromRight.apply(element)
```

##### Example:

```javascript
// the next line will move every canvas on the document from right side to its original position
Tag('canvas').map(canvas => MoveXInFromRight.apply(canvas));
```
