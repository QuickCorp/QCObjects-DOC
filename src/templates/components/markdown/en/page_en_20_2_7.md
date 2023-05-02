### [ArrayList or Array].matrix

Generates a matrix in one dimension.

#### Usage
**[].matrix (length, [value])** Where **length** is the number of elements and the optional **value** is the value of each element, it can be any value of any type.

```javascript
let matrix = Array.matrix(10);
// matrix = [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0
]
```

```javascript
let matrix = ArrayList.matrix(10,1);
// matrix = [
  1, 1, 1, 1, 1,
  1, 1, 1, 1, 1
]
```

```javascript
let a = 1, b = 2;
let c = ArrayList.matrix(10,{a,b})
// c = [
 { a: 1, b: 2 },
 { a: 1, b: 2 },
 { a: 1, b: 2 },
 { a: 1, b: 2 },
 { a: 1, b: 2 },
 { a: 1, b: 2 },
 { a: 1, b: 2 },
 { a: 1, b: 2 },
 { a: 1, b: 2 },
 { a: 1, b: 2 }
]
```

