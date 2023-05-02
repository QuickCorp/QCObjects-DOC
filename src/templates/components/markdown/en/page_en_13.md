# Demo
--------------

## PWA Live Demo

Check out a live demo of pure QCObjects based frontend Progressive Web App here:
[PWA QCObjects](https://newapp.qcobjects.dev/)

## Demo Integrating with Foundation

Check out a demo using Foundation components here:
[Demo Using Foundation](https://github.com/QuickCorp/quickobjects_sample1foundation)

## Demo Integrating with Materializecss

Check out a demo using MaterializeCSS here:
[Demo Using Materializecss](https://qln.link)

## Demo Using Raw CSS

Check out a demo using raw CSS:
[Demo Using Raw CSS](https://github.com/QuickCorp/qcobjects_profile_browser)

## Example of QCObjects using and manipulating canvas objects

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
