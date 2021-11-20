// USAGE: <trds-card>
// <xxx slot="trds-card__media"> for media element of the card
// <xxx slot="trds-card__body"> for body element of the card(it gets the height if available)
// <xxx slot="trds-card__footer"> for footer element of the card(its gonna be pushed to the bottom of the card if it can)

import '../base/layout.js';
import '../base/theme.js';

customElements.define('trds-card', class trdsCard extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    background-color: var(--trds-theme--secondary-bg);
                    display: flex;
                    flex-direction: column;
                    border: 1px solid var(--trds-theme--primary-bg);
                }

                ::slotted([slot=trds-card__media]){
                    display: block;
                }
            
                ::slotted([slot=trds-card__body]){
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    padding: var(--trds-space--l);
                }
            
                ::slotted([slot=trds-card__footer]){
                    box-sizing: border-box;
                    display: block;
                    padding: var(--trds-space--l);
                    padding-top: 0;
                }
            </style>
            <slot name="trds-card__media"></slot>
            <slot name="trds-card__body"></slot>
            <slot name="trds-card__footer"></slot>
        `

    }

});