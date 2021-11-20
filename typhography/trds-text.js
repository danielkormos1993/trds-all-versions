// USAGE: <trds-text>
// the element can inherit font size and line-height and color

import '../base/layout.js';

customElements.define('trds-text', class trdsText extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    max-width: var(--trds-element--max-width);
                }
                :host > span{
                    -webkit-text-size-adjust: 100%;
                    color: inherit;
                    font-size: inherit;
                    line-height: inherit;
                }
            </style>
            <span>
                <slot></slot>
            </span>    
        `

    }

});