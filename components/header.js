const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
<link rel="stylesheet" href="assets/css/style.css">

<header id="header">
    <div class="container d-flex">
        <a class="navbar-brand" href="index.html">
            <img src="assets/images/logo_restaurante_sol.png" height="60" alt="" loading="lazy">
        </a>
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="carta.html">
                    <span class="">Carta</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="menu.html">
                    <span class="">Menu</span>
                </a>
            </li>
        </ul>
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