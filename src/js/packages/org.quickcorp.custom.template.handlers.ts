import { ClassFactory, DefaultTemplateHandler, Package } from "qcobjects";
import showdown from "showdown";

Package("org.quickcorp.custom.template.handlers", [
    class MarkdownTemplateHandler extends DefaultTemplateHandler {
        assign (){
            const converter = new showdown.Converter();
            converter.setFlavor("github");
            return converter.makeHtml(this.template).replace(/href="#/g,"href=\"/");
        }
  
    }
]);
Package("org.quickcorp.custom.template.handlers.markdown", [
    class SideMarkdownTemplateHandler extends ClassFactory("MarkdownTemplateHandler") {
        extractReference(html:string):string{
            const matches = html.match(/<!-- TOC([\s\S]*?)<!-- \/TOC -->/gmi);
            if (matches !== null){
                const toc = matches[0];
                html = `<details open="">
                <summary>Reference</summary>
                ${toc}
                </details>`.replace(/href="#/g,"href=\"/");
            }
            return html;
        }

        assign (){
            const converter = new showdown.Converter();
            converter.setFlavor("github");
            const html = converter.makeHtml(this.template);
            return this.extractReference(html);
        }
    }

]);

