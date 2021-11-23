import '../elements/trds-link.js';
import { copyAttributes } from '../libs/copyAttributes.js';
import '../elements/trds-loader.js';
import '../elements/trds-icon.js';
import '../typhography/trds-text.js';

customElements.define('trds-button', class trdsButton extends HTMLElement{

    constructor(){

        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <slot></slot>
        `;

    }

    connectedCallback(){

        let buttonElement = 
            this.hasAttribute('href') ? 
            document.createElement('trds-link') : document.createElement('button');

        if(buttonElement.nodeName.toLowerCase() === 'trds-link'){
            copyAttributes(this, ['download', 'href', 'target'], buttonElement);
        }

        if(buttonElement.nodeName.toLowerCase() === 'button'){
            copyAttributes(this, ['type'], buttonElement);
            let loader = this.appendChild(document.createElement('trbs-loader'));
            loader.addEventListener('enabled', this.setAttribute('disabled', ''));
            loader.addEventListener('disabled', this.removeAttribute('disabled'));
        }

        if(this.hasAttribute('icon')){
            let iconElement = document.createElement('trds-icon');
            iconElement.setAttribute('icon', this.getAttribute('icon'));
            buttonElement.appendChild(iconElement);
        }

        if(this.hasAttribute('text')){
            let textElement = document.createElement('trds-text');
            textElement.textContent = this.getAttribute('text');
            buttonElement.appendChild(textElement);
        }

        this.appendChild(buttonElement);

    }

});