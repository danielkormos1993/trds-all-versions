import '../base/layout.js';

customElements.define('trds-card', class trdsCard extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    box-sizing: border-box;
                    background-color: var(--trbs-children-bg-color);
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 .25rem .5rem .1rem var(--trbs-children-bg-color);
                }

                ::slotted([slot=trbs-card__media]){
                    display: block;
                    box-sizing: border-box;
                }
            
                ::slotted([slot=trbs-card__body]){
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    padding: var(--trbs-space--l);
                }
            
                ::slotted([slot=trbs-card__footer]){
                    box-sizing: border-box;
                    display: block;
                    padding: var(--trbs-space--l);
                    padding-top: 0;
                }
            </style>
            <slot name="trbs-card__media"></slot>
            <slot name="trbs-card__body"></slot>
            <slot name="trbs-card__footer"></slot>
        `

    }

});