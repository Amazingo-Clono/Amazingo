class AmazonNavbar extends HTMLElement {
  static name = "amazon-navbar";

  constructor() {
    self = super();
  }

  connectedCallback() {
    const builder = new ElementBuilder("nav");
    builder
      .setClass("navbar navbar-dark bg-dark")
      .addChild("a", "navbar-brand")
      .setTextContent("Amazon")
      .setAttribute("href", "index.html")
      .addChild("ul", "navbar-nav mr-auto mt-2 mt-lg-0")
    builder
      .addChild("button", "btn btn-light")
      .setTextContent("Don't");
    builder.attach(self);
  }
}

class AmazonFooter extends HTMLElement {
  static name = "amazon-footer";

  constructor() {
    self = super();
  }

  connectedCallback() {
    const builder = new ElementBuilder("footer");
    builder.addChild("button", "btn btn-dark")
      .setTextContent("Footer");
    builder.attach(self);
  }
}

class ElementBuilder {
  element = null;

  constructor(element) {
    this.element = document.createElement(element);
  }

  addChild(childElement, classes) {
    const builder = new ElementBuilder(childElement);
    this.element.appendChild(builder.element);
    if (classes)
      builder.setClass(classes);
    return builder;
  }

  addChildAndForget(childElement, classes) {
    this.addChild(childElement, classes);
    return this;
  }

  setTextContent(text) {
    this.element.textContent = text;
    return this;
  }

  setAttributes(attributes) {
    attributes.forEach(([key, value]) =>
      this.element.setAttribute(key, value));
    return this;
  }

  setAttribute(key, value) {
    this.element.setAttribute(key, value);
    return this;
  }

  setClass(classString) {
    this.setAttribute("class", classString);
    return this;
  }

  attach(attachingElement) {
    if (attachingElement) {
      attachingElement.appendChild(
        (document
          .createElement("template")
          .appendChild(this.element))
        .cloneNode(true)
      );
    }
  }
}

function registerCustomElements(elementClasses) {
  elementClasses.forEach(cClass => 
    customElements.define(cClass.name, cClass)
  );
}

(() => {
  registerCustomElements([AmazonNavbar, AmazonFooter]);
})()