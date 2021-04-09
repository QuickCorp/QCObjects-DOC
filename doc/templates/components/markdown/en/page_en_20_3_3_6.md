#### org.quickcorp.tools.effects.RotateX

Rotates an object in X axis.

##### Usage:
```javascript
RotateX.apply(element, angleFrom, angleTo)
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:
```javascript
// the next line will rotate in X axis the div called #id from 180 degrees to 240 degrees
Tag('div#id').map(div => RotateX.apply(div, 180, 240));
```

