// use as h2 is trbs-h2
import '../libs/wc-polyfill.js';
import '../base/layout.js';
import '../base/sizes.js';

customElements.define('trbs-h2', class trbsH2 extends HTMLHeadingElement{

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
                    font-size: var(--trbs-size--xl);
                    line-height: 1.3;
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

},{extends: 'h2'});