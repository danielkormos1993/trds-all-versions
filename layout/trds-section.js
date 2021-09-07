import '../base/layout.js';

customElements.define('trds-section', class trdsSection extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    max-width: 100%;
                    overflow: hidden;
                    padding: var(--trds-space--xxl) var(--trds-container--padding-x);
                    box-sizing: border-box;
                }
                :host(:last-child){
                    flex: 1;
                }
            </style>
            <slot></slot>
        `
    }

});