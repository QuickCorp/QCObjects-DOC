'use strict';
Package('org.quickcorp.custom.tools',[
  Class('MarkdownTemplateHandler',DefaultTemplateHandler,{
    assign:function (data){
      var converter = new showdown.Converter();
      converter.setFlavor('github');
      return converter.makeHtml(this.template);
    }
  }),
  Class('PushNotifications',InheritClass,{
    _new_:function (){
      window.onpush = function(event) {
        console.log(event.data);
        // From here we can write the data to IndexedDB, send it to any open
        // windows, display a notification, etc.
      }

      navigator.serviceWorker.ready.then(
        function(serviceWorkerRegistration) {
          serviceWorkerRegistration.pushManager.subscribe().then(
            function(pushSubscription) {
              console.log(pushSubscription.endpoint);
              // The push subscription details needed by the application
              // server are now available, and can be sent to it using,
              // for example, an XMLHttpRequest.
            }, function(error) {
              // During development it often helps to log errors to the
              // console. In a production environment it might make sense to
              // also report information about errors back to the
              // application server.
              console.log(error);
            }
          );
        });
    }
  })
]);

let pushNotifications = New(PushNotifications);
