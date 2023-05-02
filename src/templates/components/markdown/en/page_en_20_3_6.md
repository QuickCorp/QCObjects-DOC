### SDK i18n messages

The QCObjects i18n engine allows you to define custom messages . Learn more in this article in the DevBlog called [i18n Internationalisation for your Progressive Web Apps](https://devblog.qcobjects.org/i18n-internationalisation-for-your-progressive-web-apps-ck90h4qz301ca7vs1ue7joopu)

#### org.quickcorp.i18n_messages.i18n_messages

Used to call the i18n engine.

##### Usage:
```javascript
  class i18n_messages_<custom lang> extends i18n_messages {
	...
  }
```

##### Example
```javascript
'use strict';
// file: js/packages/org.quickcorp.i18n_messages.es.js
Package('org.quickcorp.i18n_messages.es', [
  class i18n_messages_es extends i18n_messages {
    messages= [
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

  }
]);

// the next line generates an instance of the i18n engine and attaches it automatically in the package

const _i18n_messages_es = New(ClassFactory("i18n_messages_es"));

```
