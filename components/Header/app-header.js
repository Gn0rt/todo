import { componentStyles } from "./header.js";
class AppHeader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.rel = "stylesheet";
    fontAwesomeLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css";
    fontAwesomeLink.integrity =
      "sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="; // Nên thêm Integrity để bảo mật
    fontAwesomeLink.crossOrigin = "anonymous";
    fontAwesomeLink.referrerPolicy = "no-referrer";

    // Tạo thẻ style và đưa CSS vào Shadow DOM
    const style = document.createElement("style");
    style.textContent = componentStyles;
    //HTML
    const template = document.createElement("div");
    template.id = "header";
    template.innerHTML = `
      <div class="content">
        <a href="" id="logo">ToDo</a>
        <div id="search">
          <input type="text" id="search-value" placeholder="Search here ...." />
          <a href="" class="search-logo"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></a>
        </div>
        <div>
          <ul class="items notification">
            <li class="item">
              <a href="#"><i class="fa-regular fa-bell"></i></a>
            </li>
            <li class="item calendar">
              <a href="#"><i class="fa-regular fa-calendar"></i></a>
            </li>
            <li class="item datetime">
              <strong>Friday</strong>
              <span>28/11/2025</span>
            </li>
          </ul>
        </div>
      </div>
    `;

    //gắn vào show dom
    shadow.appendChild(style);
    shadow.appendChild(template);
    shadow.appendChild(fontAwesomeLink);
  }
}

//đăng ký thành phần
customElements.define("app-header", AppHeader);
