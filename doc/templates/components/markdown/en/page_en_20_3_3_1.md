#### org.quickcorp.tools.effects.Move

Moves a DOM object from one position to another.

##### Usage:

```javascript
Move.apply(element, xfrom, yfrom, xto, yto)
```

##### Example:

```javascript
// The next line will move all the images from (0,0) to (10,10)
Tag('img').map(img => Move.apply(img,0,0,10,10))
```
