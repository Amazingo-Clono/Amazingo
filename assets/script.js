class AmazonNavbar extends HTMLElement {
  static name = "amazon-navbar";
  _secondNavbar = ["Angebote", "Gratis Versand", "Gutscheine", "Erneut kaufen", "Geschenkideen", "Amazon Basics", "Amazon Business", "Thomas' Amazon", "Küche, Haushalt & Wohnen", "Browserverlauf", "Drogerie & Körperpflege", "Shopping Tipps", "Baumark"];
  _sideBar = [
    {
      title: "Im Trend",
      children: ["Bestseller", "Neuerscheinungen", "Aufsteiger des Tages"]
    },
    {
      title: "Digitale Inhalte & Geraete",
      subDirs: [{
        title: "Prime Video",
        subMenu: [{
          title: "Prime Video",
          children: ["Alle Videos", "Shop", "Kostenlos mit Werbung", "Kategorien", "Mein Bereich", "Auf vielen Geraeten verfuegbar"]
        }]
      }, {
        title: "Amazon Music",
        subMenu: [{
          title: "Musik Streamen",
          children: ["Amazon Music Unlimited", "Amazon Music Prime", "Gratis Musik streamen", "Amazon Music Apps", "Meine Musikbibliothek"]
        }, {
          title: "Musik Kaufen",
          children: ["CDs & vinyl"]
        }]
      }, {
        title: "Amazon Appstore",
        subMenu: [{
          title: "Amazon Appstore",
          children: ["Alle Apps und Spiele", "Spiele", "Amazon Coins", "Amazon Apps", "Meine Apps und Abonnements"]
        }]
      }, {
        title: "Amazon Photos",
        subMenu: [{
          title: "Amazon Photos",
          children: ["Amazon Photos", "Amazon Drive", "Lade die kostenlose Apps herunter", "Anmelden"]
        }]
      }, {
        title: "Echo & Alexa",
        subMenu: [{
          title: "Echo-Geraete",
          children: ["Alle Geraete mit Alexa anzeigen", "Echo - Intelligente Lautsprecher", "Echo mit Bildschirm", "Alexa fuer unterwegs"]
        }, {
          title: "Haussicherheit & Konnektivitaet",
          children: ["Haussicherheit von Amazon", "Ring und Bink Kameras", "Ring und Blink Tuerklingen", "Ring Alarm Systeme"]
        }, {
          title: "Alexa & Smart Home",
          children: ["Smarte Beleuchtung und Steckdosen", "eero WLAN Mesh", "Zertifizerit fuer Menschen"]
        }, {
          title: "Mehr Inhalte",
          children: ["Alexa kennenlerne", "Datenschutzportal fuer Alexa", "Alexa App", "Alexa integrierte Gerate", "Amazon Music Unlimited", "Audible Hoerbuecher"]
        }]
      }, {
        title: "Fire TV",
        subMenu: [{
          title: "Video- und Spielespass",
          children: ["Alle Fire TV-Geraete", "Streaming-Geraete", "Fire TV Smart-TVs", "Zubehoer"]
        }, {
          title: "Filme, Serien und Mehr",
          children: ["Prime Video - Enthalten in Prime", "Prime Video - Alle Videos", "Apps & SPiele fuer Fire TV", "Amazon Photos"]
        }]
      }, {
        title: "Fire-Tablets",
        subMenu: [{
          title: "Fire-Tablets",
          children: ["Alle Fire-Tablets", "Fire-Tablets", "Fire-Tablets fuer Kinder", "Zubehoer"]
        }, {
          title: "Inhalte Und Verwaltung",
          children: ["Prime Video", "Apps & Spiele", "Musik-Downloads", "Kindle eBooks", "Newsstand", "Audible Hoerbuecher", "Amazon Kids+", "Meine Inhalte und Geraete"]
        }]
      }, {
        title: "Kindle eReader & Buecher",
        subMenu: [{
          title: "Kindle Ereader",
          children: ["Alle Kindle eReader", "Kindle eReader", "Kindle Kids Edition", "Zubehoer"]
        }, {
          title: "Kindle-Shop",
          children: ["Kindle eBooks", "Englische eBooks", "Kindle Unlimited", "Prime Reading", "Newsstand"]
        }, {
          title: "Inhalte und Verwaltung",
          children: ["Gratis Kindle Lese-Apps", "Kindle Cloud Reader", "Meine Inhalte und Geraete"]
        }]
      }, {
        title: "Audible Hoerbuecher",
        subMenu: [{
          title: "Audible Hoerbuecher",
          children: ["Audible Abo", "Alle Audible Hoerbuecher", "Bestseller", "Neuerscheinungen", "Sachbuecher"]
        }]
      }]
    },
    {
      title: "Alle Kategorien",
      subDirs: [{
        title: "Buecher",
        subMenu: [{
          title: "Buecher",
          children: ["Alle Buecher", "Kindle eBooks", "Kindle Unlimited", "Prime Reading", "Fremdsprachige Buecher", "Fachbuecher", "Schulbuecher & Lernhilfen", "Hoerbuecher"]
        }, {
          title: "Audible Hoerbuecher",
          children: ["Audbile-Abo", "Alle Audbile Hoerbuecher", "Whispersync for Voice"]
        }]
      }, {
        title: "Filme, Serien, Musik & Games",
        subMenu: [{
          title: "Filme, Serien, Musik & Games",
          children: ["Prime Video - Alle Videos", "Ale DVDs & Blu-rays", "Serien auf DVD & Blu-ray", "Blu-ray-Shop", "Musik-CDs & Vinyl", "Klassische Musik", "Musik-Downloads", "Musikinstrumente & DJ-Equipment", "Games"]
        }]
      }, {
        title: "Moebel, Haushalt, Tier & Baumarkt",
        subMenu: [{
          title: "Elektronik & Foto",
          children: ["Kamera & Foto", "Smartphones & Zubehoer", "TV, Fernseher & Heimkino", "Audio & HiFi", "Musikinstrumente & DJ-Equipment", "Navigation", "Elektronik-Zubehoer", "Konsolen & Games-Zubehoer", "Kuechen- & Haushaltsgeraete", "Elektro-Grossgeraete", "Alle Produkte"]
        }]
      }],
      more: [{
        title: "Kosmetik, Drogerie & Lebensmittel", 
        subMenu: [{
          title: "Computer & Buero",
          children: ["Laptops", "Tablets", "Computer-Zubehoer", "PC-Komponenten", "Software", "PC- & Video-Games", "Drucker & Tintenpatronen", "Buerobedarf & Schreibwaren"]
        }]
      }, { 
        title: "Spielzeug & Baby",
        subMenu: [{
          title: "Spielzeug & Baby",
          children: ["Spielzeug", "Baby", "Babykleidung & Babyschuhe", "Brettspiele", "Baby-Wunschliste"]
        }]
      }, {
        title: "Bekleidung, Schuhe, Schmuck und Accessoires",
        subMenu: [{
          title: "Bekleidung, Schuhe, Schmuck Und Accessoires",
          children: ["Amazon Fashion", "Damen", "Herren", "Maedchen", "Jungen", "Baby", "Koffern, Rucksaecke & Taschen"]
        }, {
          title: "Mehr Entdecken",
          children: ["The Drop", "Fashion-Angebote", "Prime Erst probieren, dann zahlen", "Kundenfavoriten"]
        }]
      }, {
        title: "Sport & Freizeit",
        subMenu: [{
          title: "Sport & Freizeit",
          children: ["Alle Sport-Produkte", "Fanshop", "Camping & Outdoor", "Fitness", "Fussball", "Radsport", "Running", "Sportelektronik", "Sportbekleidung", "Sportschuhe"]
        }]
      }, {
        title: "Auto, Motorrad & Gewerbe",
        subMenu: [{
          title: "Auto, Motorrad & Gewerbe",
          children: ["Alles in Gewerbe, Industrie & Wissenschaft", "Labor", "Reinigung", "Sicherheit"]
        }, {
          title: "Auto & Motorrad",
          children: ["Autoteile & -zubehoer", "Werkzeug & Wartung", "Motorrad", "Navigation & Car-Hi-Fi"]
        }]
      }]
    },
    {
      title: "Programme & Funktionen",
      subDirs: [{
        title: "Handmade & Amazon Launchpad",
        subMenu: [{
          title: "Handmade",
          children: ["Alle Handmade-Produkte", "Geschenke", "Schmuck", "Kueche, Haushalt & Wohnen", "Hochzeit", "Bekleidung, Schuhe & Accessoires", "Schreibwaren & Partybedarf", "Baby", "Spielzeug & Spiele", "Made in Italy"]
        }, {
          title: "Kontaktieren Sie Uns",
          children: ["Du erstellst Produkte in Handarbeit"]
        }, {
          title: "Amazon Launchpad",
          children: ["Alle Produkte aus Amazon Launchpad", "Elektronik & Gadgets", "Sport & Outdoor"]
        }]
      }],
      children: ["Luxury Stores", "Amazon Outlet", "Geschenke & Wunschzettel"],
      more: [{
        title: "Kleine Unternehmen",
        subMenu: {
          title: "Kleine Unternehmen",
          children: ["Produkte von kleinen Unternehmen", "Kleine Unternehmen kennenlernen", "Deutsche Produkte entdecken", "Oesterreichische Produkte entdecken", "Die Hoehle der Loewen"]
        },
      }, {
        title: "Amazon Business",
        subMenu: {
          title: "Amazon Business",
          children: ["Amazon fuer Unternehmen"]
        }
      }, {
        title: "Amazon Custom"
      }, {
        title: "Prime Erst probieren, dann zahlen"
      }, {
        title: "Kundenfavoriten"
      }, {
        title: "Amazon Second Change"
      }, {
        title: "Climate Pledge Friendly"
      }]
    },
    {
      title: "Hilfe & Einstellungen",
      children: ["Mein Konto", "Deutsch", "Deutschland", "Waehrungseinstellungen", "Kundenservice", "Anmelden"]
    }
  ]

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
            <a href="search.html" type="submit" class="btn btn-warning rounded-0 rounded-end">
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
        <a class="nav-link" href="warenkorb.html"" aria-disabled=" true">
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
    const sideBar = new ElementBuilder("nav")
      .setClass("bg-white")
      .setId("sidebar");
    sideBar
      .addChild("div", "second-footer container py-2 px-4 text-white")
      .setAttribute("style", "font-size: 19px;")
      .setId("sidebarHeader")
      .addChildAndForget("i", "fas fa-circle-user")
      .addChild("span", "fw-bold ms-2")
      .setAttribute("style", "font-size: 20px;")
      .setTextContent("Hallo, anmelden");
    const sideBarContent = sideBar
      .addChild("div", "overflow-scroll h-100");
    const subMenu = ({title, children, subDirs, more}) => {
      sideBarContent
        .addChildAndForget("hr")
        .addChild("h6", "container fw-bold ms-3")
        .setTextContent(title);
      const addLink = (text, subMenu) => {
        const link = sideBarContent
          .addChild("div", "w-90 font-14")
          .addChild("a", "text-black text-decoration-none text-start")
          .setAttribute("href", "#")
          .addChild("div", "d-flex flex-row justify-content-between")
          .setTextContent(text);
        if (subMenu)
          link.addChild("i", "fas fa-angle-right");
      };
      if (subDirs)
        subDirs.forEach(({title}) => addLink(title, true));
      if (children)
        children.forEach((text) => addLink(text, false));
      if (more) {
        sideBarContent.addChild("hr");
        more.forEach(({title, subMenu}) => addLink(title, !!subMenu));
      }
    }

    this._sideBar.forEach((stuff) => {
      subMenu(stuff);
    });
    const navbarWrapper = new ElementBuilder("div");
    navbarWrapper.addBuilderAsChild(new ElementBuilder("nav")
      .setClass("navbar navbar-expand-lg navbar-dark bg-dark")
      .setAttribute("id", "topOfPage")
      .setInnerHTML(`
        <a class="navbar-brand pl-2" href="index.html">
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
      .addChild("div", "second-footer d-flex flex-row")
      .setAttribute("style", "flex-wrap: nowrap; overflow: hidden;height: auto;")
    secondNavbar
      .setId("toggle-button")
      .addChild("button", "btn text-white font-12 text-nowrap fw-bold")
      .setAttributes([["type", "button"], ["id", "sidebarCollapse"], ["onclick", "document.getElementById('sidebar').classList.toggle('active')"]])
      .addChildAndForget("i", "fas fa-align-left me-2")
      .addChild("span")
      .setTextContent("Alle");
    this._secondNavbar.forEach((title) =>
      secondNavbar
        .addChild("a", "btn text-white font-12 text-nowrap")
        .setAttribute("style", "min-width: min-content;")
        .setAttribute("href", "#")
        .setTextContent(title)
    )
    navbarWrapper.addBuilderAsChild(sideBar);
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
