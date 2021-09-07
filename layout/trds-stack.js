import '../base/layout.js';

customElements.define('trds-stack', class trdsStack extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: grid;
                    gap: var(--trds-space--m);
                    /* align-content: start; */
                }
            </style>
            <slot></slot>
        `

    }

});