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
  _footerLinks = [
    {
      title: "Ueber Amazon",
      children: [
        "Karriere bei Amazon",
        "Pressemitteilungen",
        "Erfahre mehr ueber Amazon",
        "Impressum",
        "Amazon Science",
      ]
    },
    {
      title: "Geld verdienen mit Amazon",
      children: [
        "Jetzt verkaufen",
        "Verkaufen mit Amazon Business",
        "Verkaufen bei Amazon Handmade",
        "Partnerprogramm",
        "Versand durch Amazon",
        "Deine Marke aufbauen und schuetzen",
        "Prime durch Verkaeufer",
        "Bewerbe deine Produkte",
        "Dein Buch mit uns veroeffentlichen",
        "Amazon Pay",
        "Hosten eines Amazon Hubs",
        "Mehr von \"Mit uns Geld verdienen\" anzeigen",
      ]
    },
    {
      title: "Amazon-Zahlungsarten",
      children: [
        "Einkaufen mit Punkten",
        "Finanzierung von Barclays",
        "Amazon Business Amex Card",
        "Gutscheine",
        "Monatsabrechnung",
        "Bankeinzug",
        "Amazon Waehrungsumrechner",
        "Mein Amazon-Konto aufladen",
        "Amazon vor Ort aufladen",
      ]
    },
    {
      title: "Wir helfen dir",
      children: [
        "Amazon und Covid-19",
        "Lieferung verfolgen oder Bestellung anzeigen",
        "Versand & Verfuegbarkeit",
        "Amazon Prime",
        "Rueckgabe & Ersatz",
        "Recycling (einschliessslich Entsorgung von Elektro- & Elektronikaltgeraeten",
        "Vertraege kuendigen",
        "Vodafone-Vertraege kuendigen",
        "Meine Inhalte und Geraete",
        "Amazon App",
        "Kundenservice",
        "Barrierefreiheit"
      ]
    }
  ]

  constructor() {
    self = super();
  }

  connectedCallback() {
    const builder = new ElementBuilder("footer").setClass("w-100");
    builder
      .addChild("div", "d-flex justify-content-center")
      .addChild("a")
      .setTextContent("Zurueck zum Seitenanfang")
      .setAttribute("href", "#");
    const secondFooter = builder
      .addChild("div", "d-flex justify-content-between container");
    this._footerLinks.forEach(({ title, children}) => {
      const wrapping = secondFooter
        .addChild("div", "container");
      wrapping
        .addChild("h2")
        .setTextContent(title);
      const list = wrapping
        .addChild("ul");
      children.forEach(child =>
        list
          .addChild("li")
          .addChild("a")
          .setAttribute("href", "#")
          .setTextContent(child)
      );
    });
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

  setInnerHTML(innerHTML) {
    this.element.innerHTML = innerHTML;
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