// usage: trds-link-text + attributes
// use for inline text links which will be underlined

import { trdsLink } from '../elements/trds-link.js';

customElements.define('trds-link-text', class trdsLinkText extends trdsLink{

    constructor(){
        super();

        let styleTag = document.createElement('style');

        styleTag.textContent = `

            :host > a{
                text-decoration: underline;
                color: inherit;
                line-height: inherit;
                -webkit-text-size-adjust: 100%;
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