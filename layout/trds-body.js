// USAGE: <body is="trds-body">
// the trds-body comes with a trds-main and trds-section element
// put the page content in the trds-main element, then divide it into sections with trds-section element if needed
// that way the content is going be full page even if the content is not tall
// TODO: loading phase

import '../libs/wc-polyfill.js';
import '../base/layout.js';
import '../base/theme.js';

customElements.define('trds-body', class trdsBody extends HTMLBodyElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    min-height: 100vh;
                    display: grid;
                    grid-template-rows: 1fr auto;
                    margin: 0;
                    padding: 0;
                    background-color: var(--trds-theme--primary-bg);
                    color: var(--trds-theme--primary-text);
                }
            </style>
            <slot></slot>
        `

    }

},{extends: 'body'});

customElements.define('trds-main', class trdsMain extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: flex;
                    flex-direction: column;
                }
            </style>
            <slot></slot>
        `

    }

});

customElements.define('trds-section', class trdsSection extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
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