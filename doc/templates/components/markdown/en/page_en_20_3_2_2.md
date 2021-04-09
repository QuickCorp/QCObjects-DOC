#### org.quickcorp.controllers.DataGridController

**DataGridController** will take the data of your component and map a set of subcomponents to fill it up.
This is commonly used to render a dynamic list of components. It used a **subcomponentClass** attribute value in the **component** tag to determine what component definition to use to build and render every sub-component. The data on every sub-component will be filled up with the value of the element mapped to the sub-component.

##### Usage:

```html
<component name="name_of_component" controllerClass="DataGridController" subcomponentClass="SubComponentClass">
</component>
```

##### Example:

Suppose you have to render a list of profiles. Every profile has a profile picture, a name and an email.
You want to use a card to represent every profile in the list.

So you define a CardComponent to render the picture, the name and email of an element in the list.

```javascript
Class("CardComponent",Component,{
	name:"card", // this will point to templates/components/card.tpl.html
	data:{ // the value of this object will be overriden by DataGridController
		name:"<name of contact>",
		email:"email@example.com",
		profilePicture:"img/photo.png"
	}
})
```

```html
<!-- template: card.tpl.html -->
<img src="{{profilePicture}}"/>
<h3>{{name}}</h3>
<p>{{email}}</p>
```

Then, you have to place a component to generate the list of cards.

```html
<component name="loading_list" componentClass="MyListComponent" controllerClass="DataGridController"
subcomponentClass="CardComponent">
</component>
```

```html
<!-- template: loading_list.tpl.html -->
<p>Loading list...</p>
```

Last, you have to define MyListComponent to assign the dynamic data of the list.

```javascript
Class("MyListComponent",Component,{
	data:[
		{ // the value of this object will be mapped to a subcomponent by DataGridController
			name:"<name of contact>",
			email:"email@example.com",
			profilePicture:"img/photo.png"
		},
		{ // the value of this object will be mapped to a subcomponent by DataGridController
			name:"<name of contact>",
			email:"email@example.com",
			profilePicture:"img/photo.png"
		},
		{ // the value of this object will be mapped to a subcomponent by DataGridController
			name:"<name of contact>",
			email:"email@example.com",
			profilePicture:"img/photo.png"
		}
	]
})
```

The resulting component will be a list of **CardComponent** with the data of every profile mapped into them by **DataGridController**.
