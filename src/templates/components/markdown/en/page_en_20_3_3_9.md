#### org.quickcorp.tools.effects.Rotate

Rotates an object in X, Y, Z axes. All axes will rotate in paralell at the same time producing a 3d visual effect perception.

##### Usage:
```javascript
(new Rotate()).apply(element, angleFrom, angleTo)
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:
```javascript
// the next line will rotate in X, Y and Z axes the div called #id form 0 to 270 degrees
Tag('div#id').map(div => (new Rotate()).apply(div, 0, 270));
```
