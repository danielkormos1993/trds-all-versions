// USAGE: <trds-grid>
// this grid element will put the elements inside into a grid
// if no class added, it will behave like a normal grid with bigger spacing
// if addedd class .boxes-layout then the spacing will be narrower(nicer for boxed like elements)
// if added class .auto-width-layout then the elements inside will take the most less space that they needed (eg for icons, etc.)
// modify gap property of the host element(even modify row-gap column-gap style property) for the desired behaviour

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
                    align-items: center;
                }
                :host(.auto-width-layout) ::slotted(*){
                    flex: 0 1 auto;
                }
            </style>
            <slot></slot>
        `

    }

});