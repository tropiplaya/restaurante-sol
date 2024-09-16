const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="assets/css/style.css">

  <header id="header" class="d-flex flex-row border-bottom border-light">
    <nav id="navbar" class="  navbar fixed-top navbar-expand-lg navbar-light shadow-2" style="">
      <div class="container">
        <a class="navbar-brand me-2" id="navbar-brand-logo" href="/">
          <img src="assets/images/logo_restaurante_sol.png" height="60" alt="" loading="lazy">
        </a>
        <span class="header-slogan" >Tu restaurante chino desde 2001</span>
        <ul id="main-navbar" class="nav navbar-nav nav-flex-icons ml-auto ms-auto">            
          <li class="nav-item me-3 me-lg-0" alt="Pricing" id="navbar-static-support">
            <a class="nav-link" href="carta.html">
            <span class="d-none d-lg-inline-block ml-1">Carta</span>
            <i class="fas fa-gem d-inline-block d-lg-none"></i>
            </a>
          </li>        
          <li class="nav-item me-3 me-lg-0" alt="Support" id="navbar-static-support">
            <a class="nav-link" href="menu.html">
            <span class="d-none d-lg-inline-block ml-1">Menu</span>
            <i class="fas fa-question-circle d-inline-block d-lg-none"></i>
            </a>
          </li>         
        </ul>    
      </div>
    </nav>      
    </div>
    
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);