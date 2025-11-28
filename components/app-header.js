const componentStyles = `
#header {
    background-color: var(--bg-header);
    padding: 10px 5px;
}

.content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#logo {
    text-decoration: none;
    display: inline-block;
    color: var(--primary);
    font-size: 30px;
    padding: 5px;
    font-weight: 700;
    letter-spacing: 2px;
}

#search {
    /* border: 1px solid #000; */
    /* padding: 10px; */
    width: 500px;
    display: flex;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
}

#search-value {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    margin-left: 10px;
}

.search-logo {
    text-decoration: none;
    color: var(--white);
    background-color: var(--primary);
    display: block;
    padding: 10px;
    border-radius: 5px;
}

.items {
    display: flex;
    list-style: none;
    gap: 20px;
    align-items: center;
}

.item a {
    text-decoration: none;
    color: var(--white);
    background-color: var(--primary);
    padding: 5px;
    border-radius: 10px;
}

.datetime {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.datetime span {
    color: var(--light-blue);
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
}

`;

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
