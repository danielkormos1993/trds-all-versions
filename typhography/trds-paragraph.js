// USAGE: <trds-paragraph>
// the element can inherit font size and line-height and color

import '../base/layout.js';

customElements.define('trds-paragraph', class trdsParagraph extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    max-width: var(--trds-element--max-width);
                    box-sizing: border-box;
                }
                :host > p{
                    -webkit-text-size-adjust: 100%;
                    margin: 0;
                    color: inherit;
                    font-size: inherit;
                    line-height: inherit;
                }
            </style>
            <p>
                <slot></slot>
            </p>    
        `

    }

});