import '../base/layout.js';

customElements.define('trds-grid', class trdsGrid extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--trds-space--xxl);
                }
                ::slotted(*){
                    flex:1 1 var(--trds-grid--element-width);
                }
                :host(.boxes-layout){
                    gap: var(--trds-space--m);
                }
                :host(.auto-width-layout){
                    gap: var(--trds-space--s);
                }
                :host(.auto-width-layout) ::slotted(*){
                    flex: 0 1 auto;
                }
            </style>
            <slot></slot>
        `

    }

});