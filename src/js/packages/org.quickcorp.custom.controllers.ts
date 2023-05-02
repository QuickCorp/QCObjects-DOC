/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use strict";

import global, { Package, Controller, logger, _DOMCreateElement, 
                type Effect, New, ClassFactory, type QCObjectsElement, 
                type QCObjectsShadowedElement, type Component, type ControllerParams, getDocumentLayout } from "qcobjects";
import { Fade } from "qcobjects-sdk";

Package("org.quickcorp.custom.controllers", [
  class MainController extends Controller {
    static loaded: boolean;
    constructor(controller:ControllerParams) {
      logger.debug("Initializing MainController...");
      super(controller);
    }

    done(...args: never[]) {
      const _ret_ = super.done(args);
      if (!MainController.loaded) {
        (global as any).mainController = this;
        const s = _DOMCreateElement("style");
        s.innerHTML = `
        @import url(css/body-layout.css);
        `;
        document.body.append(s);
        logger.debug("MainController loaded");
        MainController.loaded = true;
      }
      return _ret_;
    }
  },

  class SideNavController extends Controller {
    effect: Effect | null = null;
    visibility!: boolean;
    componentRoot!: any;
    component: Component;

    constructor(controller:ControllerParams) {
      logger.debug("Initializing SideNavController...");
      super(controller);
      this.component = controller.component;
      if (this.component.shadowed) {
        this.componentRoot = this.component.shadowRoot;
      } else {
        this.componentRoot = this.component.body;
      }
    }

    done(...args: any[]) {
      const _ret_ = super.done(args);
      this.effect = New(Fade, {
        duration: 300
      });
      (global as any).sideNavController = this;
      this.close();
      window.addEventListener ("popstate", () => {
        if (getDocumentLayout() === "portrait") {
          ((global as any).sideNavController as SideNavController).close();
        }
      });

      return _ret_;
    }

    open() {
      if (this.componentRoot !== null) {
        if (this.effect != null) {
          this.effect.apply(this.componentRoot, 0, 1);
        }
        this.componentRoot?.classList.add("open");
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!this.componentRoot?.parentElement) {
          if (this.componentRoot.parentElement !== null) {
            (this.componentRoot.parentElement as QCObjectsElement).subelements(".navbtn")[0].style.display = "none";
            (this.componentRoot.parentElement as QCObjectsElement).subelements(".closebtn")[0].style.display = "block";
          }
        }

        const mainController = (global as any).mainController as Controller;
        if (mainController.component.body.parentElement !== null){
          mainController.component.body.parentElement.classList.add("open-bar");
          mainController.component.body.parentElement.classList.add("bar-opened");
        }
      }
      this.visibility = true;
      return this.visibility;
    }

    close() {
      if (this.componentRoot !== null) {
        if (this.effect != null) {
          this.effect.apply(this.componentRoot, 1, 0);
        }
        this.componentRoot?.classList.remove("open");
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!this.componentRoot?.parentElement) {
          (this.componentRoot.parentElement as QCObjectsElement).subelements(".navbtn")[0].style.display = "block";
          (this.componentRoot.parentElement as QCObjectsElement).subelements(".closebtn")[0].style.display = "none";
        }
        const mainController = (global as any).mainController as Controller;
        if (mainController.component.body.parentElement !== null){
          mainController.component.body.parentElement.classList.remove("open-bar");
          mainController.component.body.parentElement.classList.remove("bar-opened");
        }
      }
      this.visibility = false;
      return this.visibility;
    }

    toggle() {
      if (this.visibility) {
        this.close();
      } else {
        this.open();
      }
    }
  },

  class HeaderController extends Controller {
    installer: any;
    component!: Component;

    constructor(controller: ControllerParams) {
      super(controller);
      logger.debug("Header controller initialized");
    }

    loadInstallerButton() {
      const componentRoot = (this.component.shadowed != null) 
                            ? (this.component.shadowRoot as QCObjectsShadowedElement) 
                            : (this.component.body as QCObjectsElement);
      componentRoot.subelements("#installerbutton").map(
        (element) => {
          this.installer = New(ClassFactory("Installer"), element);
          return element;
        }
      );
    }

    done(...args: never[]) {
      const _ret_ = super.done(args);
      (global as any).headerController = this;
      this.loadInstallerButton();
      return _ret_;
    }
  }
]);
