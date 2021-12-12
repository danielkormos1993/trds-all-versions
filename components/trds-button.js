// usage: trds-button [text] [icon] [disabled]
// if added href attribute then its gonna behave as a link, it will automatically copy attributes what needed
// if its a button(no href added) then it will have a loader element
// classes: call, rounded, block, icon-on-right, outline
// for call button there must be presented a number attribute


import '../elements/trds-link-block.js';
import { copyAttributes } from '../libs/copyAttributes.js';
import '../elements/trds-loader.js';
import '../elements/trds-icon.js';
import '../typhography/trds-text.js';
import '../base/theme.js';
import '../base/layout.js';

customElements.define('trds-button', class trdsButton extends HTMLElement{

    constructor(){

        super();

        this.attachShadow({
            mode: 'open',
            delegatesFocus: true
        });

        this.shadowRoot.innerHTML = `
            <style>

                :host{
                    display: block;
                    box-sizing: border-box;
                    border-radius: 5px;
                    overflow: hidden;
                    max-width: max-content;
                    background-color: var(--trds-theme--primary);
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: var(--trds-size--xs);
                    transition: transform 0.25s ease-in-out;
                }
                :host(:hover){
                    filter: brightness(125%);
                }
                :host(:active){
                    transform: scale(0.95);
                }
                :host([disabled]){
                    filter: brightness(0.75);
                    pointer-events: none;
                }
                :host(.rounded){
                    border-radius: 50px;
                }
                :host(.block){
                    max-width: var(--trds-element--max-width);
                }
                :host(.icon-on-right) trds-icon{
                    order: 2;
                }
                :host(.call){
                    background-color: var(--trds-theme--success);
                    border-radius: 50px;
                }
                :host(.outline){
                    box-shadow: inset 0 0 0 2px currentColor;
                    background-color: transparent;
                }

                trds-link-block::part(anchor),
                button{
                    all: unset;
                    box-sizing: border-box;
                    padding: var(--trds-space--s) var(--trds-space--m);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--trds-space--s);
                    cursor: pointer;
                }

                trds-icon{
                    flex-shrink: 0;
                }

            </style>
            <slot></slot>
        `;

    }

    connectedCallback(){

        if(this.classList.contains('call')){

            if(!this.hasAttribute('number')) return console.error('Number attribute to call button must be given.');

            this.setAttribute('href', `tel:${this.getAttribute('number')}`);
            this.setAttribute('icon', 'solid/phone');
            this.setAttribute('text', this.getAttribute('number'));

        }

        let buttonElement = 
            this.hasAttribute('href') ? 
            document.createElement('trds-link-block') : document.createElement('button');

        if(buttonElement.nodeName.toLowerCase() === 'trds-link-block'){
            copyAttributes(this, ['download', 'href', 'target'], buttonElement);
        }

        if(buttonElement.nodeName.toLowerCase() === 'button'){
            copyAttributes(this, ['type'], buttonElement);
            let loader = this.appendChild(document.createElement('trds-loader'));
            loader.addEventListener('enabled', () => { this.setAttribute('disabled', '') });
            loader.addEventListener('disabled', () => { this.removeAttribute('disabled') });
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

        this.shadowRoot.appendChild(buttonElement);

    }

});