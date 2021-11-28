// usage: trds-footer
// put footer links inside as a

import '../base/theme.js';
import '../base/layout.js';
import '../layout/trds-stack.js';
import '../typhography/trds-text.js';

customElements.define('trds-footer', class trdsFooter extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    box-sizing: border-box;
                    background-color: var(--trds-theme--secondary-bg);
                    padding: var(--trds-space--xl) var(--trds-container--padding-x);
                }
                :host > trds-stack{
                    text-align: center; 
                    justify-items: center;
                }
                :host trds-text.copyright{
                    color: var(--trds-theme--secondary-text);
                }
                :host trds-stack.items{
                    gap: var(--trds-space--s);
                    justify-items: center;
                }
            </style>
            <trds-stack>
                <trds-text class="copyright">${new Date().getFullYear()} © TOP REPAIR</trds-text>
                <trds-stack class="items">
                    <slot></slot>
                </trds-stack>   
            </trds-stack>
        `;
    }

});