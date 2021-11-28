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
                :host .top{
                    text-align: center; 
                    justify-items: center;
                }
                :host trds-text{
                    color: var(--trbs-color--grey);
                }
                .trbs-footer__items-stack{
                    gap: var(--trbs-space--s);
                    justify-items: center;
                }
            </style>
            <trds-stack class="top">
                <trds-text>${new Date().getFullYear()} © TOP REPAIR</trds-text>
                <trds-stack class="items">
                    <slot></slot>
                </trds-stack>   
            </trds-stack>
        `;
    }

});