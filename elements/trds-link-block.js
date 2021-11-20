// usage: trds-link-block + attributes
// use for blocked anchors

import '../base/layout.js';
import { trdsLink } from '../elements/trds-link.js';

customElements.define('trds-link-block', class trdsLinkBlock extends trdsLink{

    constructor(){
        super();

        let styleTag = document.createElement('style');

        styleTag.textContent = `

            :host{
                display: block;
                max-width: var(--trds-element--max-width);
            }
            :host > a{
                display: block;
                text-decoration: none;
                color: inherit;
                transition: filter 0.25s ease-in-out;
            }
            :host > a:hover,
            :host > a:active,
            :host > a:focus{
                filter: brightness(125%);
            }

        `;

        this.shadowRoot.appendChild(styleTag);

    }

});