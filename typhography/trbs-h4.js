// use as h4 is trbs-h4
import '../libs/wc-polyfill.js';
import '../base/layout.js';
import '../base/sizes.js';

customElements.define('trbs-h4', class trbsH4 extends HTMLHeadingElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    margin: 0;
                    max-width: var(--trbs-element-max-width);
                    box-sizing: border-box;
                    font-size: var(--trbs-size--m);
                    line-height: 1.5;
                    text-decoration: underline;
                    font-weight: bold;
                    -webkit-text-size-adjust: 100%;
                }
                :host(.title){
                    font-size: var(--trbs-size--m);
                    line-height: 1.5;
                    text-transform: uppercase;
                    letter-spacing: .2rem;
                }
            </style>
            <slot></slot>
        `
    }

},{extends: 'h4'});