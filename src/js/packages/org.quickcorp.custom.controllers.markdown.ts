import { Controller, New, Package, SourceCSS, SourceJS } from "qcobjects";

Package("org.quickcorp.custom.controllers.markdown", [
class MarkdownController extends Controller {
  dependencies?: SourceJS[] | SourceCSS[] | undefined = [];
    done() {
      if (typeof this.dependencies === "undefined" || this.dependencies === null){
        this.dependencies = [];
      }
      (this.dependencies as Array<SourceJS>).push(New(SourceJS, {
        external: false,
        url: "prism-okaidia.js"
      }));
      (this.dependencies as Array<SourceCSS>).push(New(SourceCSS, {
        external: false,
        url: "css/prism-okaidia.css"
      }));

    }

}
]);