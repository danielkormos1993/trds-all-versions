import '../layout.js';
import '../layout/trds-container.js';

customElements.define('trds-footer', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>

                :host{
                    display: block;
                    background-color: var(--color--secondary-bg);
                    padding: var(--space--xl) 0;
                    box-sizing: border-box;
                }

            </style>

            <trds-container>
                <slot></slot>
            </trds-container>

        `;

    }

});