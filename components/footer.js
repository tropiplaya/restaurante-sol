const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

  <footer id="footer" class="d-flex flex-row">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6 px-5">
                <p class="text-center">Dirección: Calle Villalonso 31, Villaverde, Madrid</p>
            </div>

            <div class="col-xs-12 col-md-6 px-5">
                <p class="text-center">Teléfono: 915052462</p>
            </div>
        </div>
        <div class="row text-center mt-3">
            <p>&copy; copyright Restarurante Chino Sol</p>
        </div>
    </div>
</footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);