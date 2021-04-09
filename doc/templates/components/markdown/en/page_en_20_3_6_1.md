#### org.quickcorp.i18n_messages.i18n_messages

Used to call the i18n engine.

##### Usage:
```javascript
  Class('i18n_messages_<custom lang>', i18n_messages,{
		...
	})
```

##### Example
```javascript
'use strict';
// file: js/packages/org.quickcorp.i18n_messages.es.js
Package('org.quickcorp.i18n_messages.es', [
  Class('i18n_messages_es', i18n_messages, {
    messages: [
       // ... your custom language dictionary is here
      {
         "en":"This is a paragraph",
         "es":"Esto es un párrafo"
      },
      {
         "en":"Welcome to my new app",
         "es":"Bienvenido a mi nueva app"
      }
    ]
  }),
  {
		// the next line generates an instance of the i18n engine and attaches it automatically in the package
    _i18n_messages_es: New(i18n_messages_es)
  }
]);
```
