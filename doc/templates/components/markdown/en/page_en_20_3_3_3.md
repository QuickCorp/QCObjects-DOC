#### org.quickcorp.tools.effects.MoveXInFromLeft

Moves an element from the left side in X axis to the original position of the object.

##### Usage:

```javascript
MoveXInFromLeft.apply(element)
```

##### Example:

```javascript
// the next line will move every canvas on the document from left side to its original position
Tag('canvas').map(canvas => MoveXInFromLeft.apply(canvas));
```
