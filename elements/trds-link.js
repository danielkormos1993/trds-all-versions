// this is the base class for an anchor element
// it copies the neccessary attributes and add rel noopener norefferer if needed

import { copyAttributes } from '../libs/copyAttributes.js';

export class trdsLink extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <a>
                <slot></slot>
            </a>
        `;

        this.anchorTag = this.shadowRoot.querySelector('a');

    }

    connectedCallback(){

        copyAttributes(this, ['download', 'href', 'target'], this.anchorTag);

        const href = this.getAttribute('href');

        if(href && href.startsWith('http') && !href.includes(location.hostname)) this.anchorTag.setAttribute('rel', 'noopener noreferrer');

    }

}