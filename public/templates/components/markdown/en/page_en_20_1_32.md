### Effect

**Effect** is a super class to define custom effects.

#### Example:

```javascript

class CustomFade extends Effect {
	duration = 500; // milliseconds of duration
	apply (){
		// You need the following line to apply a Fade effect in runtime
		super.apply(this,...arguments);
	}

}
```
