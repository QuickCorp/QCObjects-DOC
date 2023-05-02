### SourceJS

Use SourceJS as a static Class that is helping you to load external JS dependencies. This is commonly used to load libraries that are external and that not follow the QCObjects packages syntax.

#### Example:
```javascript

class MyNewController extends Controller {
	dependencies = [];
	constructor ({dependencies}){
		dependencies.push(
			New(SourceJS,{
				external:false,
				url:'doc/js/my-js-dynamic-resource.js',
				done (){
					logger.debug("Dependency loaded")
				}})
			);
		super(...arguments);
	}
}
```
