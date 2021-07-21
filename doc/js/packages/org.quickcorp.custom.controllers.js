"use strict";
Import("installer");

Package("org.quickcorp.custom.controllers", [
  Class("MainController", Controller, {
    dependencies: [],
    component: null,
    _new_: function(o) {
      this.__new__(o);
      //TODO: Implement
    },
    done: function() {

    }
  }),
  Class("PWAController", Object, {
    component: null,
    _new_: function(o) {
      logger.debug("PWAController Element Initialized");
      this.component = o.component;
    },
    done: function() {
      document.head.innerHTML += this.component.body.innerHTML;
      this.component.body.innerHTML = "";
    }
  }),
  Class('SideMarkdownController', Object, {
    dependencies: [],
    done: function() {
      var controller = this;
      var component = controller.component;
      var subcomponent = New(SideMarkdownComponent, {
        name: 'markdownsidebar',
        body: document.createElement('div')
      });
      component.subcomponents.push(subcomponent);
      component.body.subelements('.navcontent')[0].append(subcomponent.body);
    }
  }),
  Class("SideNavController", SideMarkdownController, {
    dependencies: [],
    component: null,
    visibility: false,
    effect: null,
    mainElement: null,
    headerElement: null,
    navBtnElement: null,
    closeBtnElement: null,
    topMenuElement: null,
    appBarElement: null,
    setElements() {
      var controller = this;
      controller.appBarElement = controller.topMenuElement = global.componentsStack.filter(component => component.name === "layout-basic").pop().subcomponents.filter(component => component.name === "appbar").pop().shadowRoot;
      controller.mainElement = global.componentsStack.filter(component => component.name === "layout-basic").map(component => component.body).pop().subelements("main").pop();
      controller.headerElement = global.componentsStack.filter(component => component.name === "layout-basic").map(component => component.body).pop().subelements("header").pop();
      controller.topMenuElement = controller.appBarElement.subelements("component[name=topmenu]").pop();
      controller.navBtnElement = controller.component.body.parentElement.subelements(".navbtn").pop();
      controller.closeBtnElement = controller.component.body.parentElement.subelements(".closebtn").pop();
    },
    openHalf() {
      var controller = this;
      if (controller.effect != null) {
        controller.effect.apply(controller.component.body, 0, 1);
      }
      controller.setElements();
      controller.component.body.style.width = "35%";
      controller.component.body.style.overflowX = "visible";
      controller.mainElement.style.left = "35%";
      controller.mainElement.style.width = "65%";
      controller.headerElement.style.left = "35%";
      controller.headerElement.style.width = "65%";
      controller.headerElement.style.position = "relative";
      controller.topMenuElement.style.left = "40%";
      controller.topMenuElement.style.width = "60%";
      controller.navBtnElement.style.display = "none";
      controller.closeBtnElement.style.right = "67%";
      controller.closeBtnElement.style.display = "block";
      controller.visibility = true;
      return controller.visibility;

    },
    openWide() {
      var controller = this;
      if (controller.effect != null) {
        controller.effect.apply(controller.component.body, 0, 1);
      }
      controller.setElements();
      controller.component.body.style.width = "100%";
      controller.component.body.style.overflowX = "visible";
      controller.mainElement.style.left = "100%";
      controller.mainElement.style.width = "0";
      controller.headerElement.style.left = "100%";
      controller.headerElement.style.width = "0";
      controller.headerElement.style.position = "relative";
      controller.topMenuElement.style.left = "5%";
      controller.topMenuElement.style.width = "95%";
      controller.navBtnElement.style.display = "none";
      controller.closeBtnElement.style.right = "12px";
      controller.closeBtnElement.style.display = "block";
      controller.visibility = true;
      return controller.visibility;

    },
    open: function() {
      var controller = this;
      var _ret_;
      if (getDocumentLayout() === "portrait") {
        _ret_ = controller.openWide();
      } else {
        _ret_ = controller.openHalf();
      }
      return _ret_;
    },
    close: function() {
      var controller = this;
      if (controller.effect != null) {
        controller.effect.apply(controller.component.body, 1, 0);
      }
      controller.component.body.style.width = "0px";
      controller.component.body.style.overflowX = "hidden";
      controller.setElements();
      controller.mainElement.style.left = "0";
      controller.mainElement.style.width = "100%";
      controller.headerElement.style.left = "0";
      controller.headerElement.style.width = "100%";
      controller.headerElement.style.position = "";
      controller.topMenuElement.style.left = "55px";
      controller.topMenuElement.style.width = "100%";
      controller.navBtnElement.style.display = "block";
      controller.closeBtnElement.style.display = "none";
      controller.visibility = false;
      return controller.visibility;
    },
    toggle: function() {
      var controller = this;
      if (controller.visibility) {
        controller.close();
      } else {
        controller.open();
      }
    },
    _new_: function(o) {
      this.__new__(o);
      global.sideNavController = this;
      var controller = this;
      global._sdk_.then(function() {
        controller.effect = New(Fade, {
          duration: 300
        });
        controller.close();
      });
      //TODO: Implement

    }
  }),
  Class('MarkdownController', Controller, {
    dependencies: [],
    done: function() {
      var controller = this;
      controller.dependencies.push(New(SourceJS, {
        external: false,
        url: 'doc/js/prism-okaidia.js',
        done: function() {}
      }));
      controller.dependencies.push(New(SourceCSS, {
        external: false,
        url: 'doc/css/prism-okaidia.css',
        done: function() {}
      }));

    }
  }),
  Class("HeaderController", Controller, {
    dependencies: [],
    component: null,
    installer: null,
    loadInstallerButton: function() {
      this.installer = this.component.body.subelements("#installerbutton").reduce(e => New(ClassFactory("Installer"), {
        root: e
      }));
    },
    _new_: function(o) {
      this.__new__(o);
      //TODO: Implement
    },
    done: function() {
      //            this.loadInstallerButton();
    }
  }),
  Class("Controller1", Controller, {
    dependencies: [],
    component: null,
    _new_: function(o) {
      this.__new__(o);
      //TODO: Implement
    }
  }),
  Class("Controller2", Controller, {
    dependencies: [],
    component: null,
    _new_: function(o) {
      this.__new__(o);
      //TODO: Implement
    }
  }),
]);
