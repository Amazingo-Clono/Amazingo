class AmazonNavbar extends HTMLElement {
  static name = "amazon-navbar";
  _secondNavbar = ["Angebote", "Gratis Versand", "Gutscheine", "Erneut kaufen", "Geschenkideen", "Amazon Basics", "Amazon Business", "Thomas' Amazon", "Küche, Haushalt & Wohnen", "Browserverlauf", "Drogerie & Körperpflege", "Shopping Tipps", "Baumark"];

  constructor() {
    self = super();
  }

  connectedCallback() {
    const searchbar = new ElementBuilder("form")
      .setClass("form-inline px-lg-5")
      .setAttributes([
        ["novalidate", "true"],
        ["method", "get"],
        ["style", "min-width: 380px;"]
      ]).setInnerHTML(`
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle rounded-0 rounded-start" type="button"
                id="dropdownCategory" data-toggle="dropdown" aria-expanded="false">
                Alle
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownCategory">
                <a class="dropdown-item" href="#">Alle</a>
                <a class="dropdown-item" href="#">Smartphone</a>
                <a class="dropdown-item" href="#">Küchenbedarf</a>
                <a class="dropdown-item" href="#">Prime Angebot</a>
                <a class="dropdown-item" href="#">Buch</a>
              </div>
            </div>
          </div>
          <input type="text" class="form-control" size="50" name="query" id="query" placeholder="Suche Amazon.de">
          <div class="input-group-append">
            <a href="/search.html" type="submit" class="btn btn-warning rounded-0 rounded-end">
              <i class="fas fa-search"></i>
            </a>
          </div>
        </div>
      `);
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
      `);
    const userAccount = new ElementBuilder("li")
      .setClass("nav-item dropdown px-2 navbar-fixed-height")
      .setInnerHTML(`
        <a class="nav-link" href="#" id="userAccount" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <display-data title="Hallo, Thomas" subtitle="Konto und Listen"></display-data>
        </a>
        <div class="dropdown-menu px-3" aria-labelledby="userAccount">
          <div class="d-flex flex-column justify-content-center">
            <a href="#" class="btn btn-warning w-75 btn-sm font-weight-bold">Login</a>
            <small>New customer?<a href="register.html"> Start here.</a></small>
          </div>
        </div>
    `);
    const shoppingCart = new ElementBuilder("li")
      .setClass("nav-item px-2 navbar-fixed-height")
      .setInnerHTML(`
        <a class="nav-link" href="/warenkorb.html"" aria-disabled=" true">
          <i class="fas fa-2x text-light fa-shopping-cart"></i>
          <span class="badge badge-warning badge-pill">Einkaufswagen 0</span>
        </a>
    `);
    const navbarText = (title, subtitle) => {
      const wrapper = new ElementBuilder("li")
        .setClass("nav-item nav-link px-2 navbar-fixed-height");
      wrapper
        .addChild("display-data")
        .setAttributes([
          ["title", title],
          ["subtitle", subtitle],
        ]);
      return wrapper;
    };
    const navbarWrapper = new ElementBuilder("div");
    navbarWrapper.addBuilderAsChild(new ElementBuilder("nav")
      .setClass("navbar navbar-expand-lg navbar-dark bg-dark")
      .setAttribute("id", "topOfPage")
      .setInnerHTML(`
        <a class="navbar-brand pl-2" href="/index.html">
          <img src="" height="30" width="100" alt="amazon logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav align-items-center">
            ${
              navbarText("Lieferung an Thomas", "84082 Laberwein").element
                .outerHTML
            }
            ${searchbar.element.outerHTML}
            ${languageSelection.element.outerHTML}
            ${userAccount.element.outerHTML}
            ${
              navbarText("Warenruecksendungen", "und Bestellungen").element
                .outerHTML
            }
            ${shoppingCart.element.outerHTML}
          </ul>
        </div>`));
    const secondNavbar = navbarWrapper
      .addChild("div", "second-footer");
    this._secondNavbar.forEach((title) =>
      secondNavbar
        .addChild("a", "btn text-white")
        .setAttribute("href", "#")
        .setTextContent(title)
    )
    navbarWrapper.attach(self);
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
      ],
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
        "Dein Buch mit uns veröffentlichen",
        "Amazon Pay",
        "Hosten eines Amazon Hubs",
        'Mehr von "Mit uns Geld verdienen" anzeigen',
      ],
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
      ],
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
        "Barrierefreiheit",
      ],
    },
  ];
  _lastFooterLinks = [
      ["Amazon Advertising", "Kunden finden, gewinnen und binden"],
      ["Amazon Music", "Streame Millionen von Songs"],
      ["AbeBooks", "Bücher, Kunst & Sammelobjekte"],
      ["Amazon Web Services", "Cloud Computing Dienste von Amazon"],
      ["Audible", "Hörbücher herunterladen"],
      ["IMDb", "Filme, TV & Stars"],
      ["Kindle Direct Publishing", "Dein E-Book veröffentlichen"],
      ["Shopbop", "Designer Modemarken"],
      ["Amazon Retourenkauf", "Reduzierte B-Ware"],
      ["ZVAB", "Zentrales Verzeichnis Antiquarischer Bücher und mehr"],
      ["Amazon Business", "Mengenrabatte, Business-Preise und mehr. Für Unternehmen"],
      ["", ""], // bootstrap same width only works with even numbers of columns
  ];
  _lastFooterRechtliches = [
    "Unsere AGB",
    "Datenschutzerklärung",
    "Impressum",
    "Hinweise zu Cookies",
    "Hinweise zu interessenbasierter Werbung",
  ];

  constructor() {
    self = super();
  }

  connectedCallback() {
    const builder = new ElementBuilder("footer")
        .setClass("w-100");
    builder
      .setClass("container-fluid bg-dark px-0")
      .addChild("a", "btn btn-dark py-3 rounded-0")
      .setId("backToTop")
      .setAttribute("href", "#topOfPage")
      .setTextContent("Zurueck zum Seitenanfang");
    const secondFooter = builder
        .addChild("div")
        .setClass("second-footer");
    const wrapper = secondFooter
      .addChild("div", "container pt-4")
      .addChild("div", "row text-white");
    this._footerLinks.forEach(({ title, children }) => {
      const wrapping = wrapper
        .addChild("div", "col-md-3");
      wrapping
        .addChild("h5")
        .setTextContent(title);
      const list = wrapping
        .addChild("ul", "list-unstyled");
      children.forEach((child) =>
        list
          .addChild("li")
          .addChild("a", "text-secondary-amazon text-decoration-none onhover-underlined")
          .setAttribute("href", "#")
          .setTextContent(child)
      );
    });
    const buttonsWrapper = secondFooter
      .addChildAndForget("hr", "text-secondary-amazon")
      .addChild("div", "d-flex flex-row justify-content-center pt-2 pb-5");
    buttonsWrapper
      .addChild("btn", "btn btn-outline-secondary text-secondary-amazon mx-1")
      .setTextContent("Deutsch");
    buttonsWrapper
      .addChild("btn", "btn btn-outline-secondary text-secondary-amazon mx-1")
      .setTextContent("Deutschland");

    const lastFooter = builder
      .addChild("div", "text-third-amazon pt-2")
      .setId("last-footer");
    const otherProducts = lastFooter
      .addChild("div", "container pt-3")
      .addChild("div", "row");
    this._lastFooterLinks.forEach(([title, subtitle], index) => {
      if (index === 6)
          otherProducts.addChild("div", "w-100");
      const wrapper = otherProducts
        .addChild("a", "col text-decoration-none font-12 d-flex flex-column pb-3 onhover-underlined")
        .setAttribute("href", "#");
      wrapper
          .addChild("span", "text-white")
          .setTextContent(title);
      wrapper
          .addChild("span", "text-secondary")
          .setTextContent(subtitle);
    });

    const rechtlichtesWrapper = lastFooter
      .addChild("div", "container d-flex flex-row justify-content-center");
    this._lastFooterRechtliches.forEach((text) =>
      rechtlichtesWrapper
        .addChild("a", "text-secondary-amazon text-decoration-none font-12 mt-3 mx-2 onhover-underlined")
        .setTextContent(text)
        .setAttribute("href", "#")
    );

    lastFooter
      .addChild("div", "container d-flex justify-content-center font-12 text-secondary-amazon pb-4")
      .setTextContent(`©1996-${new Date().getFullYear()} Amazon.com, Inc. oder Partner-Unternehmen`);
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
      .setClass("text-decoration-none d-flex flex-column");
    wrapper
      .addChild("span", `${title === "Lieferung an Thomas" ? "text-secondary" : "text-white"} font-12`)
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
    if (classes) builder.setClass(classes);
    return builder;
  }

  addBuilderAsChild(builder) {
    this.element.appendChild(builder.element);
    return this;
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
    attributes.forEach(([key, value]) => this.setAttribute(key, value));
    return this;
  }

  setAttribute(key, value) {
    this.element.setAttribute(key, value);
    return this;
  }

  setClass(classString) {
    return this.setAttribute("class", classString);
  }

  setId(id) {
    return this.setAttribute("id", id);
  }

  attach(attachingElement) {
    if (attachingElement) {
      attachingElement.appendChild(
        document
          .createElement("template")
          .appendChild(this.element)
          .cloneNode(true)
      );
    }
  }
}

function registerCustomElements(elementClasses) {
  elementClasses.forEach((cClass) =>
    customElements.define(cClass.name, cClass)
  );
}

(() => {
  registerCustomElements([AmazonNavbar, AmazonFooter, DisplayData]);
})();
