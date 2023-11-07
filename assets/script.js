class AmazonNavbar extends HTMLElement {
  static name = "amazon-navbar";

  constructor() {
    self = super();
  }

  connectedCallback() {
    const searchbar = new ElementBuilder("form")
      .setClass("form-inline px-lg-5")
      .setAttributes(["novalidate", "true"], ["method", "get"])
      .setInnerHTML(`
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button"
                id="dropdownCategory" data-toggle="dropdown" aria-expanded="false">
                Alle
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownCategory">
                <a class="dropdown-item" href="#">All</a>
                <a class="dropdown-item" href="#">Smartphone</a>
                <a class="dropdown-item" href="#">Kitchen Hardware</a>
                <a class="dropdown-item" href="#">Prime Deals</a>
                <a class="dropdown-item" href="#">Book</a>
              </div>
            </div>
          </div>
          <input type="text" class="form-control" size="50" name="query" id="query">
          <div class="input-group-append">
            <button type="submit" class="btn btn-warning">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      `)
    const languageSelection = new ElementBuilder("li")
      .setClass("nav-item dropdown px-2")
      .setInnerHTML(`
        <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          DE
        </a>
        <div class="dropdown-menu" aria-labelledby="languageDropdown">
          <form class="p-3">
            <div class="dropdown-divider"></div>
            <div class="custom-control custom-radio mb-2">
              <input class="custom-control-input" type="radio" name="prefLang" id="englishLang" value="english"
                checked>
              <label class="custom-control-label" for="englishLang">
                // TODO: Flag
              </label>
            </div>
            <div class="dropdown-divider"></div>
            <div class="custom-control custom-radio mb-2">
              <input class="custom-control-input" type="radio" name="prefLang" id="hindiLang" value="hindi" checked>
              <label class="custom-control-label" for="hindiLang">
                // TODO: Flag
              </label>
            </div>
            <div class="dropdown-divider"></div>
            <div class="custom-control custom-radio mb-2">
              <input class="custom-control-input" type="radio" name="prefLang" id="urduLang" value="urdu" checked>
              <label class="custom-control-label" for="urduLang">
                // TODO: Flag
              </label>
            </div>
            <div class="dropdown-divider"></div>
            <div class="custom-control custom-radio">
              <input class="custom-control-input" type="radio" name="prefLang" id="banglaLang" value="bangla" checked>
              <label class="custom-control-label" for="banglaLang">
                // TODO: Flag
              </label>
            </div>
            <div class="dropdown-divider"></div>
          </form>
        </div>
      `)
    const userAccount = new ElementBuilder("li")
      .setClass("nav-item dropdown px-2")
      .setInnerHTML(`
        <a class="nav-link" href="#" id="userAccount" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <display-data title="Hallo, Thomas" subtitle="Konto und Listen"></display-data>
        </a>
        <div class="dropdown-menu px-3" aria-labelledby="userAccount">
          <div class="d-flex flex-column justify-content-center">
            <a href="login.html" class="btn btn-warning w-75 btn-sm font-weight-bold">Signin</a>
            <small>New customer?<a href="register.html"> Start here.</a></small>
          </div>
        </div>
    `);
    const shoppingCart = new ElementBuilder("li")
      .setClass("nav-item px-2")
      .setInnerHTML(`
        <a class="nav-link" href="#"" aria-disabled=" true">
          <i class="fas fa-2x text-light fa-shopping-cart"></i>
          <span class="badge badge-warning badge-pill">Einkaufswagen 0</span>
        </a>
    `);
    const navbarText = (title, subtitle) => {
      return new ElementBuilder("display-data")
        .setClass("nav-item px-2")
        .setAttributes([["title", title], ["subtitle", subtitle]]);
    }
    const builder = new ElementBuilder("nav");
    builder
      .setClass("navbar navbar-expand-lg navbar-dark bg-dark")
      .setAttribute("id", "topOfPage")
      .setInnerHTML(`
        <a class="navbar-brand pl-2" href="navbar.html">
          <img src="" height="30" width="100" alt="amazon logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            ${navbarText("Lieferung an Thomas", "84082 Laberwein").element.outerHTML}
            ${searchbar.element.outerHTML}
            ${languageSelection.element.outerHTML}
            ${userAccount.element.outerHTML}
            ${navbarText("Warenruecksendungen", "und Bestellungen").element.outerHTML}
            ${shoppingCart.element.outerHTML}
          </ul>
        </div>`)
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
      .setClass("container-fluid bg-dark px-0")
      .addChild("div", "container")
      .addChild("a", "btn btn-dark btn-block mb-5")
      .setAttribute("href", "#topOfPage")
      .setTextContent("Zurueck zum Seitenanfang");
    const secondFooter = builder
      .addChild("div", "container")
      .addChild("div", "row text-white mb-5");
    this._footerLinks.forEach(({ title, children}) => {
      const wrapping = secondFooter
        .addChild("div", "col-md-3");
      wrapping
        .addChild("h5")
        .setTextContent(title);
      const list = wrapping
        .addChild("ul", "list-unstyled");
      children.forEach(child =>
        list
          .addChild("li")
          .addChild("a", "text-white text-decoration-none")
          .setAttribute("href", "#")
          .setTextContent(child)
      );
    });
    builder.attach(self);
  }
}

class DisplayData extends HTMLElement {
  static name = "display-data";

  constructor() {
    self = super();
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "no title";
    const subtitle = this.getAttribute("subtitle") || "no subtitle";

    const wrapper = new ElementBuilder("a")
      .setClass("d-flex flex-column");
    wrapper
      .addChild("span", "text-secondary font-12")
      .setTextContent(title);
    wrapper
      .addChild("span", "text-white fw-bold font-14")
      .setTextContent(subtitle);
    wrapper.attach(self);
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

  addBuilderAsChild(builder) {
    return this.addChildAndForget(builder.element);
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
      this.setAttribute(key, value));
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
  registerCustomElements([AmazonNavbar, AmazonFooter, DisplayData]);
})()