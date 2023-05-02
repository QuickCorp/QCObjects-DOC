import {
  global, type ComponentDoneResponse, QCObjectsShadowedElement,
  Package, Component
} from "qcobjects";

Package("org.quickcorp.custom.components.markdown", [

  class SideMarkdownComponent extends Component {
    dependencies = [];
    templateURI = "templates/components/markdown/en/page_en_4.md";
    cached = false;
    templateHandler = "SideMarkdownTemplateHandler";
  
    done({ request, component }: ComponentDoneResponse): Promise<ComponentDoneResponse> {
      return new Promise((resolve) => {
        super.done({ request, component }).then(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this.shadowRoot as QCObjectsShadowedElement).subelements("ul>li>a").map((element: any) => {
            return (element as HTMLElement).addEventListener("click", function () {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (global as any).sideNavController.close();
            });
          });
          resolve({ request, component });
        });
      });
    }
  },

  class MarkdownComponent extends Component {
    name = "markdowncomponent";
    templateHandler = "MarkdownTemplateHandler";
  }
]);

