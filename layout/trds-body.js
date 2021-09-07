import '../libs/wc-polyfill.js';
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
                main{
                    display: flex;
                    flex-direction: column;
                }
            </style>
            <slot></slot>
        `

    }

},{extends: 'body'});

