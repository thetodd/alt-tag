window.customElements.define('x-alt',
    class extends HTMLElement {
        constructor() {
            super();
            if (this.hasAttribute("for")) {
                const img = document.getElementById(this.getAttribute("for"));
                img.alt = this.textContent
            }

            this.remove();
        }
    }
);