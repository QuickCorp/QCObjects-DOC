#### org.quickcorp.tools.effects.RotateY

Rotates an object in Y axis.

##### Usage:
```javascript
RotateY.apply(element, angleFrom, angleTo)
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:
```javascript
// the next line will rotate in Y axis the div called #id from 0 degrees to 270 degrees
Tag('div#id').map(div => RotateY.apply(div, 0, 270));
```
