export class BasePage extends HTMLElement {
  private template: string;
  private css: string;

  constructor(template: string, css: string) {
    super();
    this.template = template;
    this.css = css;
  }

  // when the component is attached to the DOM
  connectedCallback() {
    const template = document.getElementById(
      this.template,
    ) as HTMLTemplateElement;
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    const styles = document.createElement("style");
    this.appendChild(styles);
    styles.textContent = this.css;
  }
}
