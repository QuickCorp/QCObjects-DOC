#### org.quickcorp.components.FormField

**FormField** is a Class for **QCObjects** custom components that allows you to inject a Form Field generic behavior to your components. It has a reverse data-binding feature to detect the values of the DOM fields inside your form and assign them to the data values of your component. By this way, you don't loose performance making an old-fashioned two-way data binding based on observables. To implement this advanced behavior. You only need to do the following:

1.- Assign a **data-field** attribute to the DOM tag inside the component body, with the corresponding field name in your data object.

2.- To your **component tag**, assign **FormField** in the **componentClass** attribute.

3.- To recover the data of the form inside your component, just use the componentInstance.data object. Every property of the componentInstance.data object will be linked by the binding events with the value properties on every DOM object of the form that has a data-field assigned.

##### Usage:

```html
<!-- Where you place the component -->
<component name="myform" componentClass="FormField"></component>
```

```html
<!-- template: myform.tpl.html -->
<label for="email"><b>Email</b></label>
<input data-field="email" type="email" placeholder="Enter Email" name="email" required>

<label for="psw"><b>Password</b></label>
<input data-field="name" type="text" placeholder="Enter Your Name" name="name" required>
```

**data-field="name"** will be matched with **this.data.name** inside the component class and will be updated everytime a data binding event is triggered. The same will happen to **data-field="email"** and so on.

##### FormField.executeBindings():

The method **executeBindings** of FormField component will find the **data-field** attribute values and match them with the corresponding **data** fields in the component instance.

##### Data Binding Event Change:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "change" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Blur:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Blur" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Focus:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Focus" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Keydown:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Keydown" event, it will trigger the executeBindings method of your component.

