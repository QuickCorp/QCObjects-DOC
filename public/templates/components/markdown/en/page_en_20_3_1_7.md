#### org.quickcorp.components.GridComponent

GridComponent has a predefined name assigned to the value "grid", so be aware of it when you use this component class. Also, GridComponent is intended to be used in conjunction with GridController to expand its behavior to a CSS Grid.

##### Usage:

```html
<component componentClass="GridComponent" ...></component>
```

##### Example:

```html
<component rows="2" cols="2" componentClass="GridComponent" controllerClass="GridController">
  <!-- It is recommended to use subcomponents as the Grid elements-->
	<component name="name_of_subcomponent1"></component>
	<component name="name_of_subcomponent2"></component>
	<component name="name_of_subcomponent3"></component>
	<component name="name_of_subcomponent4"></component>
</controller>
```

The above example will draw a css grid of two columns and two rows and place the subcomponents into it.

Don't forget this file:
```html
<!-- file: grid.tpl.html, you can use the grid template either to draw the grid itself or to draw a loading information -->
<p>Loading grid...</p>
```
