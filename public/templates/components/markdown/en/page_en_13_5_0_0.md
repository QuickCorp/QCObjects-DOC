#### Example of QCObjects using and manipulating canvas objects

The following code shows how QCObjects can manipulate canvas objects directly and inside components

```html
<script type="module">
import "https://cdnjs.cloudflare.com/ajax/libs/qcobjects/2.4.55/QCObjects.js";

/**
 * Declare a Component containing a canvas element and then add it to document body
 */

class CanvasComponent extends Component {
	tplsource= "none";

	constructor ({name, body, width, height}){
		body = _DOMCreateElement("canvas");
		body.width = width;
		body.height = height;
		super({name,body});
	}
}

let mycanvas = new CanvasComponent(
	{
		name:"mycanvas",
		width: 400,
		height: 400
	});

document.body.append(mycanvas);

</script>
```
